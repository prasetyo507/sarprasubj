import React from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

import HeaderLayout from "./HeaderLayout";
import Section from "../../../common/Section";
import Master from "../../Master";
import Datatable from "../../../common/table/Datatable";

const SubmissionDetail = props => {
	let { refnumber } = useParams();
	const param = refnumber;
	const getDetailSubmission = props.detailSubmission.find(submission => {
		return submission.refnumber === param;
	});

	const tableHeader = [
		{
			column0: "No",
			column2: "Tipe",
			column1: "Nama Barang",
			column3: "QTY",
			column4: "Catatan"
		}
	];

	// will show action button if login by BAUs
	if (props.usedByProcurementChecking) {
		tableHeader.map(header => (header.column5 = "Aksi"));
	}

	const refNumber = [
		{
			forAttr: "refnumber",
			lableName: "Nomor referensi",
			inputAttr: {
				id: "refnumber",
				type: "text",
				value: getDetailSubmission.refnumber,
				className: "form-control",
				name: "refnumber",
				readOnly: "readonly"
			}
		}
	];

	const submissionDate = [
		{
			forAttr: "date",
			lableName: "Tanggal",
			inputAttr: {
				type: "text",
				value: getDetailSubmission.date,
				className: "form-control",
				name: "date",
				readOnly: true
			}
		}
	];

	const subjectForm = [
		{
			forAttr: "subject",
			lableName: "Perihal",
			inputAttr: {
				id: "subject",
				type: "text",
				value: getDetailSubmission.subject,
				className: "form-control",
				name: "subject",
				readOnly: true
			}
		}
	];

	const recipient = [
		{
			forAttr: "to",
			lableName: "Kepada",
			inputAttr: {
				id: "to",
				type: "text",
				value: getDetailSubmission.to,
				className: "form-control",
				name: "to",
				readOnly: true
			}
		}
	];

	const sender = [
		{
			forAttr: "from",
			lableName: "Dari",
			inputAttr: {
				id: "from",
				type: "text",
				value: getDetailSubmission.from,
				className: "form-control",
				name: "from",
				readOnly: true
			}
		}
	];

	let navButton = (
		<>
			<Link className='btn btn-warning' to='/submission'>
				Kembali
			</Link>
			<Link className='btn btn-danger pull-right' to=''>
				Batalkan Pengajuan
			</Link>
		</>
	);

	// add action button to item object
	const prepareTableContent = getDetailSubmission.items.map((items, i) => {
		let itemClone = { ...items };
		if (props.usedByProcurementChecking) {
			itemClone.action = (
				<>
					<button
						className='btn btn-danger'
						data-toggle='tooltip'
						title='tolak barang'
					>
						<i className='fa fa-ban'></i>
					</button>
					<button
						className='btn btn-success'
						data-toggle='tooltip'
						title='setujui barang'
						style={{ marginLeft: "3px" }}
					>
						<i className='fa fa-check'></i>
					</button>
				</>
			);
		}
		return itemClone;
	});

	const serveTableContent = prepareTableContent.map((items, i) => {
		return {
			no: i + 1,
			type: items.type,
			item: items.item,
			qty: items.qty,
			note: items.note,
			action: items.action
		};
	});

	return (
		<Master>
			<Section
				pageName={"Detail Pengajuan"}
				pageSubject={`Nomor ${getDetailSubmission.refnumber}`}
				box_header={navButton}
			>
				<HeaderLayout
					formAttr={{
						refNumber,
						submissionDate,
						subjectForm,
						recipient,
						sender
					}}
				/>
				<hr />
				<Datatable headContent={tableHeader} content={serveTableContent} />
			</Section>
		</Master>
	);
};

const mapStateToProps = state => {
	return {
		detailSubmission: state.submission.submissionForm
	};
};

export default connect(mapStateToProps, null)(SubmissionDetail);
