import React, { useState } from "react";
import AddBarang from "./AddBarang";
import EditBarang from "./EditBarang";
import Datatable from "../../../../common/table/Datatable";
import { connect } from "react-redux";
import { dispatchDeleteBarang } from "../../store/actions/itemsAction";

const Barang = props => {
	function onShow(foto, nama) {
		// Get the modal
		var modal = document.getElementById("myModal");
		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var modalImg = document.getElementById("img01");
		var captionText = document.getElementById("caption");
		modal.style.display = "block";
		modalImg.src = foto;
		captionText.innerHTML = nama;
	}
	function onHide() {
		var modal = document.getElementById("myModal");
		modal.style.display = "none";
	}


	function hideModal() {
		let script = document.createElement("script");
		script.innerHTML = "$('.modal').modal('hide');";
		document.body.appendChild(script);
		setID(null);
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
			}, 1000);
		}
	}
	let [id_barang, setID] = useState(null);

	let tableContent = props.barang.map((lists, key) => {
		return {
			no: key + 1,
			nama: lists.nama,
			jenis: lists.jenis,
			satuan: lists.satuan,
			photo: <img id="myImg" onClick={() => onShow(lists.photo, lists.nama)} src={lists.photo} alt={lists.nama}></img>,
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
			column3: "Satuan",
			column4: "Foto",
			column5: "Catatan",
			column6: "Aksi"
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
			<div id="myModal" className="item">
				<span className="close" onClick={() => onHide()}>&times;</span>
				<img className="item-content" alt="fullscreen_image" id="img01" />
				<div id="caption"></div>
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