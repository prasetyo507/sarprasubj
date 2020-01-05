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

	const procurementList = props.procurement.map((procurements, i) => {
		return {
			no: i + 1,
			refnumber: procurements.submission_id,
			date: procurements.date,
			status: "Baru",
			action: (
				<Link
					className='btn btn-success btn-sm'
					to={`${url}/${procurements.submission_id}/procurement`}
				>
					<i className='fa fa-eye'></i>
				</Link>
			)
		};
	});
	procurementList.map(content => tableContent.push(content));

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
		procurement: state.procurement.list
	};
};

export default connect(mapStateToProps, null)(ProcurementList);
