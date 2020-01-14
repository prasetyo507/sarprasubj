import React, { useState } from "react";
import Section from "../../../../common/Section";
import Master from "../../../Master";
import Datatable from "../../../../common/table/Datatable";
import { Link } from "react-router-dom";
import { FreeText, Option } from "../../../../common/FormGroup";
import "../category/Category.css";
import EditJenis from "./EditJenis";
import { connect } from "react-redux";
import { dispatchDeleteJenis, dispatchJenis } from "../../store/actions/itemgroupAction";

const Jenis = props => {

	const param = props.match.params.refnumber;
	var getJenis = props.kategori.find(kategori => {
		return String(kategori.id) === param;
	});
	function hideModal() {
		let script = document.createElement("script");
		script.innerHTML = "$('.modal').modal('hide');";
		document.body.appendChild(script);
		setID(null);
	}
	async function handleSubmit(event) {
		event.preventDefault();
		let fillJenis = {
			id: 1,
			id_kategori: getJenis.id,
			name: event.target.name.value,
			classification: event.target.optit.value
		}
		await props.submitJenis(fillJenis);
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
			props.deleteJenis(id);
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
	let [id_jenis, setID] = useState(null);
	let tableContent = props.jenis.map((lists, key) => {
		var klasifikasi = "-"
		if (lists.classification === "IT") {
			klasifikasi = "Barang IT"
		} else if (lists.classification === "NONIT") {
			klasifikasi = "Barang Non IT"
		} else {
			klasifikasi = "-"
		}
		return {
			no: key + 1,
			name: lists.name,
			klasifikasi: klasifikasi,
			action: (
				<>
					<button
						type="button"
						className='btn btn-warning btn-sm'
						style={{ margin: "2px" }}
						title="Ubah"
						data-toggle='modal'
						data-target='#edit_jenis'
						onClick={() => setID(lists.id)}
					>
						<i className='fa fa-edit'></i>
					</button>
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
			column1: "Jenis",
			column2: "Klasifikasi",
			column3: "Aksi"
		}
	];
	const forms1 = [
		{
			lableFor: "name",
			lableName: "Nama",
			inputAttr: {
				type: "text",
				placeholder: "Nama Jenis Barang",
				className: "form-control",
				name: "name",
				required: true
			}
		}
	];
	const radiobtn = [
		{
			optionName: "Klasifikasi Barang",
			optionList: [
				{
					optionLable: "Barang IT",
					inputAttr: {
						type: "radio",
						name: "optit",
						value: "IT",
						required: true
					}
				},
				{
					optionLable: "Barang Non IT",
					inputAttr: {
						type: "radio",
						name: "optit",
						value: "NONIT",
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
							pageName={"Jenis Barang"}
							pageSubject={"Kategori " + getJenis.name}
							box_header={"Buat Jenis Barang"}
							class_section={"padding_right"}
						>
							<form onSubmit={handleSubmit} id="myForm">
								<FreeText formProp={forms1} />
								<Option formProp={radiobtn} />

								<div className='pull-right'>
									<Link to='/category'>
										<button type='button' className='btn btn-warning'>
											Kembali
											</button>
									</Link>
									&nbsp;
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
						box_header={"Daftar Jenis Barang"}
						class_section='padding_left'
					>
						<Datatable
							headContent={tableHead}
							content={tableContent}
							tableKind="example1"
						/>
						<div className='modal fade' id='edit_jenis'>
							<EditJenis hide={hideModal} idJenis={id_jenis} />
						</div>
					</Section>
				</div>
			</div>
			<div id="snackbar">Berhasil...</div>
			<div id="snackbar2">Berhasil dihapus...</div>
		</Master>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		deleteJenis: id =>
			dispatch(dispatchDeleteJenis(id)),
		submitJenis: jenisData =>
			dispatch(dispatchJenis(jenisData))
	};
};
const mapStateToProps = state => {
	return {
		jenis: state.jenis.jenisForm,
		kategori: state.kategori.kategoriForm
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Jenis);
