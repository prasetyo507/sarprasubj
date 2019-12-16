import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";
import Datatable from "../../common/table/Datatable";
import { Link } from "react-router-dom";
import AddItemGroup from "./AddItemGroup";
import EditItemGroup from "./EditItemGroup";
class ItemGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			idTable: "example1",
			tableHead: [
				{
					column0: "Nama",
					column3: "Aksi"
				}
			],
			tableContent: [
				{
					name: "Tidak Habis pakai",
					action: (
						<>
							<button
								type='button'
								className='btn btn-warning'
								data-toggle='modal'
								data-target='#edit_grup'
							>
								<i className='fa fa-edit' aria-hidden='true'></i>
							</button>
							&nbsp;
							<Link to='/category'>
								<button className='btn btn-success'>
									<i className='fa fa-eye'></i>
								</button>
							</Link>
							&nbsp;
							<button type='button' className='btn btn-danger'>
								<i className='fa fa-close' aria-hidden='true'></i>
							</button>
						</>
					)
				},
				{
					name: "Habis Pakai",
					action: (
						<>
							<button
								type='button'
								className='btn btn-warning'
								data-toggle='modal'
								data-target='#edit_grup'
							>
								<i className='fa fa-edit' aria-hidden='true'></i>
							</button>
							&nbsp;
							<Link to='/category'>
								<button className='btn btn-success'>
									<i className='fa fa-eye'></i>
								</button>
							</Link>
							&nbsp;
							<button type='button' className='btn btn-danger'>
								<i className='fa fa-close' aria-hidden='true'></i>
							</button>
						</>
					)
				}
			]
		};
	}
	render() {
		const button = (
			<button
				type='button'
				className='btn btn-success'
				data-toggle='modal'
				data-target='#add_grup'
			>
				<i className='fa fa-plus' aria-hidden='true'></i>
				&nbsp;Tambah
			</button>
		);
		return (
			<Master>
				<Section
					pageName={"Grup Barang"}
					pageSubject={"Kelola Grup Barang"}
					box_header={button}
				>
					<Datatable
						headContent={this.state.tableHead}
						content={this.state.tableContent}
						tableKind={this.state.idTable}
					/>
					<div className='modal fade' id='add_grup'>
						<AddItemGroup />
					</div>
					<div className='modal fade' id='edit_grup'>
						<EditItemGroup />
					</div>
				</Section>
			</Master>
		);
	}
}

export default ItemGroup;
