import React, { useState } from "react";
import AddBarang from "./AddBarang";
import EditBarang from "./EditBarang";
import Datatable from "../../../../common/table/Datatable";
import { connect } from "react-redux";
import { dispatchDeleteBarang } from "../../store/actions/itemsAction";

const Barang = props => {
	function hideModal() {
		let script = document.createElement("script");
		script.innerHTML = "$('.modal').modal('hide');";
		document.body.appendChild(script);
	}

	const handleClick = id => {
		var result = window.confirm("Yakin menghapus data?");
		if (result === true) {
			props.deleteBarang(id);
			/* Toast */
			var toast = document.getElementById("snackbar2");
			/* Show Toast */
			toast.className = "show";
			setTimeout(() => {
				/* hide Toast after 2 seconds */
				toast.className = toast.className.replace("show", "");
			}, 2000);
		}
	}
	let [id_barang, setID] = useState(null);

	let tableContent = props.barang.map((lists, key) => {
		return {
			no: key + 1,
			nama: lists.nama,
			jenis: lists.jenis,
			photo: <img src={lists.photo} alt={lists.nama}></img>,
			note: lists.note,
			action: (
				<>
					<button
						type="button"
						className='btn btn-warning btn-sm'
						style={{ margin: "2px" }}
						title="Ubah"
						data-toggle='modal'
						data-target='#modal_edit'
						onClick={() => setID(lists.id)}
					>
						<i className='fa fa-edit'></i>
					</button>
					<button className='btn btn-danger btn-sm' title="Hapus" onClick={() => handleClick(lists.id)}>
						<i className='fa fa-trash'></i>
					</button>
				</>
			)
		};
	});
	const tableHead = [
		{
			column0: "No",
			column1: "Nama Barang",
			column2: "Jenis",
			column3: "Foto",
			column4: "Catatan",
			column5: "Aksi"
		}
	];

	return (
		<>
			<button
				type='button'
				className='btn btn-primary'
				data-toggle='modal'
				data-target='#modal_add'
			>
				<i className='fa fa-plus' aria-hidden='true'></i>
				&nbsp;Tambah
				</button>
			<hr />
			<Datatable
				headContent={tableHead}
				content={tableContent}
				tableKind='example1'
			/>
			<div id="snackbar2">Berhasil dihapus...</div>
			<div className='modal fade' id='modal_add'>
				<AddBarang hide={hideModal} />
			</div>
			<div className='modal fade' id='modal_edit'>
				<EditBarang hide={hideModal} idBarang={id_barang} />
			</div>
		</>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		deleteBarang: id =>
			dispatch(dispatchDeleteBarang(id))
	};
};
const mapStateToProps = state => {
	return {
		barang: state.barang.barangForm
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Barang);