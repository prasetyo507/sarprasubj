import React, { useState } from "react";
import Datatable from "../../../common/table/Datatable";
import { connect } from "react-redux";
import { dispatchDeleteSatuan } from "../store/actions/satuanAction";
import EditSatuan from "./EditSatuan";
import AddSatuan from "./AddSatuan";
import Master from "../../Master";
import Section from "../../../common/Section";

const Satuan = props => {
	function hideModal() {
		let script = document.createElement("script");
		script.innerHTML = "$('.modal').modal('hide');";
		document.body.appendChild(script);
		setID(null);
	}

	const handleClick = id => {
		var result = window.confirm("Yakin menghapus data?");
		if (result === true) {
			props.deleteSatuan(id);
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
	let [id_satuan, setID] = useState(null);

	let tableContent = props.satuan.map((lists, key) => {
		return {
			no: key + 1,
			kode: lists.kode,
			name: lists.name,
			action: (
				<>
					<button
						type="button"
						className='btn btn-warning btn-sm'
						style={{ margin: "2px" }}
						title="Ubah"
						data-toggle='modal'
						data-target='#satuan_edit'
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
			column1: "Kode Satuan",
			column2: "Satuan",
			column3: "Aksi"
		}
	];
	const button = (
		<>
			<button
				type='button'
				className='btn btn-primary'
				data-toggle='modal'
				data-target='#satuan_add'
			>
				<i className='fa fa-plus' aria-hidden='true'></i>
				&nbsp;Tambah
				</button>

		</>
	);
	return (
		<Master>
			<Section
				pageName={"Satuan"}
				pageSubject={"Daftar satuan"}
				box_header={button}
			>
				<Datatable
					headContent={tableHead}
					content={tableContent}
					tableKind='example1'
				/>
				<div id="snackbar2">Berhasil dihapus...</div>
				<div className='modal fade' id='satuan_add'>
					<AddSatuan hide={hideModal} />
				</div>
				<div className='modal fade' id='satuan_edit'>
					<EditSatuan hide={hideModal} idSatuan={id_satuan} />
				</div>
			</Section>
		</Master>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		deleteSatuan: id =>
			dispatch(dispatchDeleteSatuan(id))
	};
};
const mapStateToProps = state => {
	return {
		satuan: state.satuan.satuanForm
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Satuan);