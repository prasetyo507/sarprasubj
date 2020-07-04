import React, { Component } from "react";
import Section from "../../../common/Section";
import Master from "../../Master";
import Datatable from "../../../common/table/Datatable";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { dispatchDeleteVendor, dispatchFetchVendor } from "../store/actions/vendorAction";
import Services from "../../../services/Services";

class ListVendor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pager: {},
			pageOfItems: []
		};
	}

	componentDidMount() {
		this.loadPage();
	}

	componentDidUpdate() {
		this.loadPage();
	}

	async loadPage() {
		var cfg = {
			headers: { "user-token": this.props.token }
		}
		const params = new URLSearchParams(this.props.location.search);
		const page = parseInt(params.get('page')) || 1;
		if (page !== this.state.pager.currentPage) {
			await Services.get(`vendor?page=${page}`, cfg)
				.then(response => this.props.fetchVendor(response.data.data.vendor))
				.then(response =>
					console.log(response.payload)
				);
		}
	}

	handleClick(id) {
		var result = window.confirm("Yakin menghapus data?");
		if (result === true) {
			this.props.deleteVendor(id);
			/* Toast */
			var toast = document.getElementById("snackbar");
			/* Show Toast */
			toast.className = "show";
			setTimeout(() => {
				/* hide Toast after 2 seconds */
				toast.className = toast.className.replace("show", "");
			}, 1000);
		}
	}
	render() {
		const { pager, pageOfItems } = this.state;
		let vendors = pageOfItems.map((lists, key) => {
			return {
				no: key + 1,
				name: lists.name,
				email: lists.email,
				address: lists.address,
				action: (
					<>
						<Link
							className='btn btn-success btn-sm'
							to={`/vendor/${lists.id}/detail`}
							style={{ margin: "2px" }}
							title="Detail"
						>
							<i className='fa fa-eye'></i>
						</Link>
						<Link
							className='btn btn-warning btn-sm'
							to={`/vendor/${lists.id}/edit`}
							style={{ margin: "2px" }}
							title="Ubah"
						>
							<i className='fa fa-edit'></i>
						</Link>
						<button className='btn btn-danger btn-sm' title="Hapus" onClick={() => this.handleClick(lists.id)}>
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
				<Link to='/vendor/new'>
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
						tableKind='example3'
					/>
					{pager.pages && pager.pages.length &&
						<ul className="pagination">
							<li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
								<Link to={{ search: `?page=1` }} className="page-link">First</Link>
							</li>
							<li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
								<Link to={{ search: `?page=${pager.currentPage - 1}` }} className="page-link">Previous</Link>
							</li>
							{pager.pages.map(page =>
								<li key={page} className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
									<Link to={{ search: `?page=${page}` }} className="page-link">{page}</Link>
								</li>
							)}
							<li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
								<Link to={{ search: `?page=${pager.currentPage + 1}` }} className="page-link">Next</Link>
							</li>
							<li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
								<Link to={{ search: `?page=${pager.totalPages}` }} className="page-link">Last</Link>
							</li>
						</ul>
					}
					<div id="snackbar">Berhasil dihapus...</div>
				</Section>
			</Master>
		);
	}
};
const mapDispatchToProps = dispatch => {
	return {
		deleteVendor: id =>
			dispatch(dispatchDeleteVendor(id)),
		fetchVendor: value =>
			dispatch(dispatchFetchVendor(value))
	};
};
const mapStateToProps = state => {
	return {
		vendor: state.vendor.vendorForm,
		token: state.token.tokenKey
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListVendor);
