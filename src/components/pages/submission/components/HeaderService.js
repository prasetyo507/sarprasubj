import React, { useState, useEffect } from "react";
import $ from "jquery";

import HeaderLayout from "./HeaderLayout";

export const HeaderService = props => {
	const d = new Date();

	const [headerState, setState] = useState({});

	const handleFormChange = e => {
		if (e.target.value !== "" && e.target.value !== headerState.subject) {
			setState({
				...headerState,
				[e.target.name]: e.target.value,
				refnumber: $('input[name="refnumber"]').val(),
				date: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,
				to: $('input[name="to"]').val(),
				from: $('input[name="from"]').val()
			});
		}
	};

	const { handleSubjectInput, resetHeader } = props;

	useEffect(() => {
		setState({
			refnumber: "",
			date: "",
			subject: "",
			to: "",
			from: ""
		});
	}, [resetHeader]);

	useEffect(() => {
		handleSubjectInput({ ...headerState });
	}, [headerState, handleSubjectInput]);

	const refNumber = [
		{
			forAttr: "refnumber",
			lableName: "Nomor referensi",
			inputAttr: {
				id: "refnumber",
				type: "text",
				placeholder: "nomor referansi pengajuan",
				className: "form-control",
				name: "refnumber",
				readOnly: "readonly",
				value: Math.floor(Math.random() * 101)
			}
		}
	];

	const submissionDate = [
		{
			forAttr: "date",
			lableName: "Tanggal",
			inputAttr: {
				type: "text",
				value: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`,
				placeholder: "tanggal pengajuan",
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
				placeholder: "perihal pengajuan",
				className: "form-control",
				name: "subject",
				onBlur: e => handleFormChange(e)
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
				value: "Biro Administrasi Umum",
				placeholder: "unit tujuan",
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
				placeholder: "unit yang mengajukan",
				className: "form-control",
				name: "from",
				readOnly: true,
				value: "PTI"
			}
		}
	];

	return (
		<HeaderLayout
			formAttr={{ refNumber, submissionDate, subjectForm, recipient, sender }}
		/>
	);
};
