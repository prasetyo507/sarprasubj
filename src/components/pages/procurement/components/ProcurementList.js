import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import Master from "../../Master";
import Section from "../../../common/Section";
import Datatable from "../../../common/table/Datatable";

const ProcurementList = props => {
	const { url } = useRouteMatch();
	const tableHead = [
		{
			column1: "No",
			column2: "Nomor Referensi",
			column3: "Tanggal Pengajuan",
			column4: "Status",
			column5: "Lihat"
		}
	];

	const tableContent = [];

	const submissionList = props.submission.map((submissions, i) => {
		return {
			no: i + 1,
			refnumber: submissions.refnumber,
			date: submissions.date,
			status: "Baru",
			action: (
				<Link
					className='btn btn-success btn-sm'
					to={`${url}/${submissions.refnumber}/seesubmission`}
				>
					<i className='fa fa-eye'></i>
				</Link>
			)
		};
	});
	submissionList.map(content => tableContent.push(content));

	return (
		<Master>
			<Section
				pageName={"Daftar Pengadaan"}
				pageSubject={"Daftar seluruh pengadaan"}
			>
				<Datatable
					tableKind='example1'
					headContent={tableHead}
					content={tableContent}
				/>
			</Section>
		</Master>
	);
};

const mapStateToProps = state => {
	return {
		submission: state.submission.submissionForm
	};
};

export default connect(mapStateToProps, null)(ProcurementList);
