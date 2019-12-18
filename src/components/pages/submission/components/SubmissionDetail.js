import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import HeaderLayout from "./HeaderLayout";
import Section from "../../../common/Section";
import Master from "../../Master";
import Datatable from "../../../common/table/Datatable";

const SubmissionDetail = props => {
	const param = props.match.params.refnumber;
	const getDetailSubmission = props.detailSubmission.find(submission => {
		return submission.refnumber === param;
	});

	console.log(getDetailSubmission);
	const tableHeader = [
		{
			column0: "No",
			column2: "Tipe",
			column1: "Nama Barang",
			column3: "QTY",
			column4: "Catatan"
		}
	];

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

	let backButton = (
		<>
			<Link className='btn btn-warning' to='/submission'>
				Kembali
			</Link>
			<Link className='btn btn-danger pull-right' to=''>
				Batalkan Pengajuan
			</Link>
		</>
	);

	const tableContent = [];

	const itemSubmission = getDetailSubmission.items.map((items, i) => {
		return {
			no: i + 1,
			type: items.type,
			item: items.item,
			qty: items.qty,
			note: items.note
		};
	});
	itemSubmission.map(items => tableContent.push(items));

	return (
		<Master>
			<Section
				pageName={"Detail Pengajuan"}
				pageSubject={`Nomor ${getDetailSubmission.refnumber}`}
				box_header={backButton}
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
				<Datatable headContent={tableHeader} content={tableContent} />
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
