import React from "react";
import Section from "../../../common/Section";
import Master from "../../Master";
import Datatable from "../../../common/table/Datatable";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { dispatchDeleteVendor } from "../store/actions/vendorAction";

const ListVendor = props => {
	const { url } = useRouteMatch();
	const handleClick = id => {
		props.deleteVendor(id);
		/* Toast */
		var toast = document.getElementById("snackbar");
		/* Show Toast */
		toast.className = "show";
		setTimeout(() => {
			/* hide Toast after 2 seconds */
			toast.className = toast.className.replace("show", "");
		}, 2000);
	}

	let vendors = props.vendor.map((lists, key) => {
		return {
			no: key + 1,
			nama: lists.nama,
			email: lists.email,
			alamat: lists.alamat,
			action: (
				<>
					<Link
						className='btn btn-success btn-sm'
						to={`${url}/${lists.id}/detail`}
						style={{ margin: "2px" }}
						title="Detail"
					>
						<i className='fa fa-eye'></i>
					</Link>
					<Link
						className='btn btn-warning btn-sm'
						to={`${url}/${lists.id}/edit`}
						style={{ margin: "2px" }}
						title="Ubah"
					>
						<i className='fa fa-edit'></i>
					</Link>
					<button className='btn btn-danger btn-sm' title="Hapus" onClick={() => handleClick(lists.id)}>
						<i className='fa fa-trash'></i>
					</button>
				</>
			)
		};
	});

	const tableHead = [
		{
			column0: "No",
			column1: "Nama Supplier",
			column2: "Email",
			column3: "Alamat",
			column4: "Aksi"
		}
	];

	const button = (
		<>
			<Link to={`${url}/new`}>
				<button type='button' className='btn btn-primary'>
					<i className='fa fa-plus' aria-hidden='true'></i> Tambah
			</button>
			</Link>

		</>
	);

	return (
		<Master>
			<Section
				pageName={"Vendor"}
				pageSubject={"Daftar vendor"}
				box_header={button}
			>
				<Datatable
					headContent={tableHead}
					content={vendors}
					tableKind='example1'
				/>
				<div id="snackbar">Berhasil dihapus...</div>
			</Section>
		</Master>
	);
};
const mapDispatchToProps = dispatch => {
	return {
		deleteVendor: id =>
			dispatch(dispatchDeleteVendor(id))
	};
};
const mapStateToProps = state => {
	return {
		vendor: state.vendor.vendorForm
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListVendor);
