import React, { useState } from "react";
import Section from "../../../../common/Section";
import Master from "../../../Master";
import Datatable from "../../../../common/table/Datatable";
import { FreeText, Option } from "../../../../common/FormGroup";
import "./Category.css";
import EditCategory from "./EditCategory";
import { connect } from "react-redux";
import { dispatchDeleteKategori, dispatchKategori } from "../../store/actions/itemgroupAction";
import { Link, useRouteMatch } from "react-router-dom";

const Category = props => {

	const { url } = useRouteMatch();
	function hideModal() {
		let script = document.createElement("script");
		script.innerHTML = "$('.modal').modal('hide');";
		document.body.appendChild(script);
		setID(null);
	}
	async function handleSubmit(event) {
		event.preventDefault();
		let fillCategory = {
			id: 1,
			name: event.target.name.value,
			grup: event.target.optgrup.value
		}
		await props.submitKategori(fillCategory);
		var my_form = document.getElementById("myForm");
		my_form.reset()
		/* Toast */
		var toast = document.getElementById("snackbar");
		/* Show Toast */
		toast.className = "show";
		setTimeout(() => {
			/* hide Toast after 2 seconds */
			toast.className = toast.className.replace("show", "");
		}, 1000);
	};
	const handleClick = id => {
		var result = window.confirm("Yakin menghapus data?");
		if (result === true) {
			props.deleteKategori(id);
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
	let [id_category, setID] = useState(null);
	let tableContent = props.kategori.map((lists, key) => {
		var grup_barang = "-"
		if (lists.grup === "CONSUMABLE") {
			grup_barang = "Habis Pakai"
		} else if (lists.grup === "NONCONSUMABLE") {
			grup_barang = "TIdak Habis Pakai"
		} else {
			grup_barang = "-"
		}
		return {
			no: key + 1,
			name: lists.name,
			grup: grup_barang,
			action: (
				<>
					<button
						type="button"
						className='btn btn-warning btn-sm'
						style={{ margin: "2px" }}
						title="Ubah"
						data-toggle='modal'
						data-target='#edit_category'
						onClick={() => setID(lists.id)}
					>
						<i className='fa fa-edit'></i>
					</button>
					<Link
						className='btn btn-success btn-sm'
						to={`${url}/${lists.id}/jenis`}
						style={{ margin: "2px" }}
						title={"Jenis dari " + lists.name}
					>
						<i className='fa fa-eye'></i>
					</Link>
					<button className='btn btn-danger btn-sm' style={{ margin: "2px" }} title="Hapus" onClick={() => handleClick(lists.id)}>
						<i className='fa fa-trash'></i>
					</button>
				</>
			)
		};
	});
	const tableHead = [
		{
			column0: "No",
			column1: "Kategori",
			column2: "Grup",
			column3: "Aksi"
		}
	];
	const forms1 = [
		{
			lableFor: "name",
			lableName: "Nama",
			inputAttr: {
				type: "text",
				placeholder: "Nama Kategori Barang",
				className: "form-control",
				name: "name",
				required: true
			}
		}
	];
	const radiobtn = [
		{
			optionName: "Grup Barang",
			optionList: [
				{
					optionLable: "Habis Pakai",
					inputAttr: {
						type: "radio",
						name: "optgrup",
						value: "CONSUMABLE",
						required: true
					}
				},
				{
					optionLable: "Tidak Habis Pakai",
					inputAttr: {
						type: "radio",
						name: "optgrup",
						value: "NONCONSUMABLE",
						required: true
					}
				}
			]
		}
	]
	return (
		<Master>
			<div className='row'>
				<div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
					<div className='padding_right'>
						<Section
							pageName={"Kategori Barang"}
							pageSubject={"Kelola Kategori Barang"}
							box_header={"Buat Kategori Barang"}
							class_section={"padding_right"}
						>
							<form onSubmit={handleSubmit} id="myForm">
								<FreeText formProp={forms1} />
								<Option formProp={radiobtn} />
								<div className='pull-right'>

									<button type='submit' className='btn btn-success'>
										Tambah
										</button>
								</div>
							</form>
						</Section>
					</div>
				</div>
				<div className='col-xs-12 col-sm-8 col-md-8 col-lg-8'>
					<Section
						box_header={"Daftar Kategori Barang"}
						class_section='padding_left'
					>
						<Datatable
							headContent={tableHead}
							content={tableContent}
							tableKind='example1'
						/>
						<div className='modal fade' id='edit_category'>
							<EditCategory hide={hideModal} idCategory={id_category} />
						</div>
					</Section>
				</div>
			</div>
			<div id="snackbar">Berhasil...</div>
			<div id="snackbar2">Berhasil dihapus...</div>
		</Master >
	);
}

const mapDispatchToProps = dispatch => {
	return {
		deleteKategori: id =>
			dispatch(dispatchDeleteKategori(id)),
		submitKategori: kategoriData =>
			dispatch(dispatchKategori(kategoriData))
	};
};
const mapStateToProps = state => {
	return {
		kategori: state.kategori.kategoriForm
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);