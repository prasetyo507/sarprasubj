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
			column3: "Tanggal Pengadaan",
			column4: "Status",
			column5: "Grand Total",
			column6: "Lihat"
		}
	];
	const tableContent = [];

	const procurementList = props.procurement.map((procurements, i) => {
		let status = "-"
		if (procurements.approval === 1) {
			status = (<b style={{ color: "green" }}>&bull; Disetujui BPAK</b>)
		} else if (procurements.approval === 2) {
			status = (<b style={{ color: "red" }}>&bull; Tidak disetujui BPAK</b>)
		} else if (procurements.approval === 3) {
			status = (
				<>
					<b style={{ color: "green" }}>&bull; Disetujui BPAK</b><br />
					<b style={{ color: "green" }}>&bull; Disetujui Rektor</b>
				</>
			)
		} else if (procurements.approval === 4) {
			status = (
				<>
					<b style={{ color: "green" }}>&bull; Disetujui BPAK</b><br />
					<b style={{ color: "red" }}>&bull; Tidak disetujui Rektor</b>
				</>
			)
		} else if (procurements.approval === 0) {
			status = (<b style={{ color: "grey" }}>&bull; Belum disetujui</b>)
		}
		let action = ""
		if (props.auth.group_id === 11 + "") {
			action = (
				<>
					<Link
						className='btn btn-success btn-sm'
						to={`${url}/${procurements.submission_id}/procurement`}
						disabled={procurements.approval === 0 ? false : true}>
						<i className='fa fa-eye'>BPAK</i>
					</Link>
					<Link
						className='btn btn-success btn-sm'
						to={`${url}/${procurements.submission_id}/Procurementsfinal`}
						disabled={(procurements.approval === 1) && (procurements.grandTotal >= 2000000) ? false : true}>
						<i className='fa fa-eye'>Rektor</i>
					</Link>
				</>
			)
		} /* else if (props.auth.group_id === 11 + "") {
			action = (
				<Link
					className='btn btn-success btn-sm'
					to={`${url}/${procurements.submission_id}/procurement`}
					disabled={procurements.approval === 0 ? false : true}>
					<i className='fa fa-eye'></i>
				</Link>
			)
		} */
		return {
			no: i + 1,
			refnumber: procurements.submission_id,
			date: procurements.date,
			status: status,
			grandTotal:
				'Rp ' + procurements.grandTotal
					.toFixed(0) // always two decimal digits
					.replace('.', ',') // replace decimal point character with ,
					.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
			,
			action: action
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
		procurement: state.procurement.list,
		auth: state.auth.authForm
	};
};

export default connect(mapStateToProps, null)(ProcurementList);
