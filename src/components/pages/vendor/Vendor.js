import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";
import Datatable from "../../common/table/Datatable";
import { Link } from "react-router-dom";

class Vendor extends Component {
	constructor() {
		super();
		this.state = {
			idTable: "example1",
			tableHead: [
				{
					column0: "Nama Supplier",
					column1: "Email",
					column2: "Alamat",
					column3: "Aksi"
				}
			],
			tableContent: [
				{
					name: "King",
					email: "bla@yahoo.com",
					note: "Matraman",
					action: (
						<Link to='/editvendor'>
							<button className='btn btn-warning'>
								<i className='fa fa-edit'></i>
							</button>
						</Link>
					)
				},
				{
					name: "Enter",
					email: "nyo@gmail.com",
					note: "Mangga Dua",
					action: (
						<Link to='/editvendor'>
							<button className='btn btn-warning'>
								<i className='fa fa-edit'></i>
							</button>
						</Link>
					)
				}
			]
		};
	}
	render() {
		const button = (
			<Link to='/addvendor'>
				<button type='button' class='btn btn-success'>
					<i class='fa fa-plus' aria-hidden='true'></i> Tambah
				</button>
			</Link>
		);
		return (
			<Master>
				<Section
					pageName={"Vendor"}
					pageSubject={"Daftar vendor"}
					box_header={button}
				>
					<Datatable
						headContent={this.state.tableHead}
						content={this.state.tableContent}
						tableKind={this.state.idTable}
					/>
				</Section>
			</Master>
		);
	}
}

export default Vendor;
