import React, { useState } from "react";
import "./Catalogue.css";
import AddCatalogue from "./AddCatalogue";
import EditCatalogue from "./EditCatalogue";
import Datatable from "../../../../common/table/Datatable";
import { connect } from "react-redux";
import { dispatchDeleteCatalogue } from "../../store/actions/itemsAction";

const Catalogue = props => {
	function hideModal() {
		let script = document.createElement("script");
		script.innerHTML = "$('.modal').modal('hide');";
		document.body.appendChild(script);
		setID(null);
	}

	const handleClick = id => {
		var result = window.confirm("Yakin menghapus data?");
		if (result === true) {
			props.deleteCatalogue(id);
			/* Toast */
			var toast = document.getElementById("snackbar5");
			/* Show Toast */
			toast.className = "show";
			setTimeout(() => {
				/* hide Toast after 2 seconds */
				toast.className = toast.className.replace("show", "");
			}, 2000);
		}
	}
	let [id_catalogue, setID] = useState(null);

	let tableContent = props.catalogue.map((lists, key) => {
		return {
			no: key + 1,
			name: lists.name,
			vendor: lists.vendor,
			price: lists.price,
			tipe_garansi: lists.tipe_garansi,
			waktu_garansi: lists.waktu_garansi + " bulan",
			action: (
				<>
					<button
						type="button"
						className='btn btn-warning btn-sm'
						style={{ margin: "2px" }}
						title="Ubah"
						data-toggle='modal'
						data-target='#modal_edit_catalogue'
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
			column2: "Vendor",
			column3: "Harga",
			column5: "Garansi",
			column6: "Waktu Garansi",
			column7: "Aksi"
		}
	];
	return (
		<>
			<button
				type='button'
				className='btn btn-primary'
				data-toggle='modal'
				data-target='#modal_catalogue'
			>
				<i className='fa fa-plus' aria-hidden='true'></i>
				&nbsp;Tambah
				</button>

			<hr />

			<Datatable
				headContent={tableHead}
				content={tableContent}
				tableKind='example2'
			/>
			<div id="snackbar5">Berhasil dihapus...</div>
			<div className='modal fade' id='modal_catalogue'>
				<AddCatalogue hide={hideModal} />
			</div>
			<div className='modal fade' id='modal_edit_catalogue'>
				<EditCatalogue hide={hideModal} idCatalogue={id_catalogue} />
			</div>
		</>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		deleteCatalogue: id =>
			dispatch(dispatchDeleteCatalogue(id))
	};
};
const mapStateToProps = state => {
	return {
		catalogue: state.catalogue.catalogueForm
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
