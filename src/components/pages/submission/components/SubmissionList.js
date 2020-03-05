import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

import Master from "../../Master";
import Section from "../../../common/Section";
import Datatable from "../../../common/table/Datatable";

const SubmissionList = props => {
	const { url } = useRouteMatch();
	let submissions = props.submission.map((lists, key) => {
		return {
			no: key + 1,
			refNumber: lists.refnumber,
			date: lists.date,
			action: (
				<>
					<Link
						className='btn btn-info btn-sm'
						to={`${url}/${lists.refnumber}/seesubmission`}
					>
						<i className='fa fa-eye'></i>
					</Link>
				</>
			)
		};
	});

	console.log(props.submission)
	const tableHead = [
		{
			column1: "No",
			column2: "Nomor Referensi",
			column3: "Tanggal",
			column4: "Lihat"
		}
	];

	const createSubmissionBtn = (
		<Link className='btn btn-primary' to={`${url}/new`}>
			<i className='fa fa-file'></i> Buat Pengajuan
		</Link>
	);

	return (
		<Master>
			<Section
				pageName={"Daftar Pengajuan"}
				pageSubject={"Daftar seluruh pengajuan"}
				box_header={createSubmissionBtn}
			>
				<Datatable
					tableKind='example1'
					headContent={tableHead}
					content={submissions}
				/>
			</Section>
		</Master>
	);
};

const mapStateToProps = state => {
	return {
		submission: state.submission.submissionForm,
		auth: state.auth.authForm
	};
};

export default connect(mapStateToProps, null)(SubmissionList);
