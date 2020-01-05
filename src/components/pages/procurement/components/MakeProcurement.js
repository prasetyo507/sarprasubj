import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { dispatchProcurement } from "../store/actions/procurementAction";
import { currentDate } from "../../../services/Helper";
import { useParams } from "react-router-dom";
import Section from "../../../common/Section";
import Master from "../../Master";
import { FreeText } from "../../../common/FormGroup";
import { TextArea } from "../../../common/FormGroup";
import Datatable from "../../../common/table/Datatable";

const MakeProcurement = props => {
	const _ = require("lodash");

	useEffect(() => {
		let script = document.createElement("script");
		script.innerHTML = "$('.select2').select2();";
		document.body.appendChild(script);
	});

	// get detail submission for left panel
	const { refnumber } = useParams();
	const getDetailSubmission = props.submission.find(
		submission => submission.refnumber === refnumber
	);

	const [procItem, setProc] = useState([]);

	// handle add item before submit the procurement
	const addItemHandler = e => {
		e.preventDefault();
		let itemList = {
			id: procItem.length + 1,
			item: e.target["item_name"].value,
			vendor_id: e.target["vendor"].value,
			vendor_name:
				e.target["vendor"].options[e.target["vendor"].options.selectedIndex]
					.text,
			price: e.target["price"].value,
			amount: e.target["amount"].value
		};
		setProc([...procItem, itemList]);

		// reset form
		e.target.reset();
	};

	// remove item from item list
	const removeProcItemHandler = id => {
		let items = procItem.filter(item => item.id !== id);
		setProc(items);
	};

	const submitProcurementHandler = e => {
		e.preventDefault();
		const pickItemObject = procItem.map(item => {
			return _.pick(item, ["item", "vendor_id", "price", "amount"]);
		});

		let procurement = {
			submission_id: getDetailSubmission.refnumber,
			date: currentDate(),
			note: e.target["note"].value,
			items: [...pickItemObject]
		};
		props.submitProcurement(procurement);

		setTimeout(() => {
			props.history.push("/procurement");
		}, 1300);
	};

	const detailSubmission = [
		{
			forAttr: "refnumber",
			lableName: "Nomor Referensi",
			inputAttr: {
				id: "refnumber",
				type: "text",
				value: getDetailSubmission.refnumber,
				className: "form-control",
				disabled: true
			}
		},
		{
			forAttr: "date",
			lableName: "Tanggal Pengajuan",
			inputAttr: {
				id: "date",
				type: "text",
				value: getDetailSubmission.date,
				className: "form-control",
				disabled: true
			}
		},
		{
			forAttr: "subjek",
			lableName: "Perihal",
			inputAttr: {
				id: "subjek",
				type: "text",
				value: getDetailSubmission.subject,
				className: "form-control",
				disabled: true
			}
		},
		{
			forAttr: "kepada",
			lableName: "Kepada",
			inputAttr: {
				id: "kepada",
				type: "text",
				value: getDetailSubmission.to,
				className: "form-control",
				disabled: true
			}
		},
		{
			forAttr: "dari",
			lableName: "Dari",
			inputAttr: {
				id: "dari",
				type: "text",
				value: getDetailSubmission.from,
				className: "form-control",
				disabled: true
			}
		}
	];

	const noteInput = [
		{
			forAttr: "note",
			lableName: "Catatan",
			inputAttr: {
				className: "form-control",
				name: "note"
			}
		}
	];

	const tableHead = [
		{
			column1: "Nama Barang",
			column2: "Vendor",
			column3: "Harga Satuan",
			column6: "Jumlah",
			column5: "Aksi"
		}
	];

	const tableContent = [
		{
			item: (
				<input
					type='text'
					className='form-control'
					name='item_name'
					placeholder='masukan nama item'
				/>
			),
			vendor: (
				<select className='form-control select2' name='vendor' id='type'>
					<option value=''>-- Pilih Vendor --</option>
					<option value='1020'>CV. Sejahtera Abadi Selamanya</option>
					<option value='1021'>PT. Cihuy Wak Waw</option>
					<option value='1022'>PT. Euclide Res Leting</option>
				</select>
			),
			price: (
				<input
					type='text'
					className='form-control'
					name='price'
					placeholder='masukan harga item'
				/>
			),
			amount: (
				<input
					type='text'
					className='form-control'
					name='amount'
					placeholder='jumlah barang'
				/>
			),
			action: (
				<button className='btn btn-success btn-sm' type='submit'>
					<i className='fa fa-plus'></i>
				</button>
			)
		}
	];

	if (procItem.length !== 0) {
		let adjustItemList = procItem.map(item => {
			// filter object, item id not used here
			let pickSomeData = _.pick(item, [
				"item",
				"vendor_name",
				"price",
				"amount"
			]);
			let cloneProcItem = { ...pickSomeData };
			cloneProcItem.action = (
				<button
					type='button'
					className='btn btn-danger btn-sm'
					onClick={() => removeProcItemHandler(item.id)}
				>
					<i className='fa fa-minus'></i>
				</button>
			);
			return cloneProcItem;
		});
		adjustItemList.map(newItem => tableContent.push(newItem));
	}

	return (
		<Master>
			<Section
				pageName='Buat Pengadaan'
				pageSubject='Nomor 29-20122019-01'
				class_section='col-md-3'
			>
				<FreeText formProp={detailSubmission} />
				<Link to='/procurement' className='btn btn-primary'>
					Kembali
				</Link>
				<button className='btn btn-warning pull-right'>Lihat barang</button>
			</Section>
			<Section class_section='col-md-9'>
				<form onSubmit={addItemHandler} name='formInput'>
					<Datatable headContent={tableHead} content={tableContent} />
				</form>
				<form onSubmit={submitProcurementHandler}>
					<TextArea formProp={noteInput} />
					<button className='btn btn-success pull-right' type='submit'>
						Ajukan
					</button>
				</form>
			</Section>
		</Master>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		submitProcurement: payload => dispatch(dispatchProcurement(payload))
	};
};

const mapStateToProps = state => {
	return {
		submission: state.submission.submissionForm
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeProcurement);
