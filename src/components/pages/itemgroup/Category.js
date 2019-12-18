import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";
import Datatable from "../../common/table/Datatable";
import { Link } from "react-router-dom";
import { FreeText } from "../../common/FormGroup";
import "./Category.css";
import EditCategory from "./EditCategory";
class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoCategory: "",
			fillCategory: { name: "", action: "" },
			idTable: "example1",
			tableHead: [
				{
					column0: "Kategori",
					column3: "Aksi"
				}
			],
			tableContent: [
				{
					name: "Alat Tulis Kantor",
					action: (
						<>
							<button
								type='button'
								className='btn btn-warning'
								data-toggle='modal'
								data-target='#edit_category'
							>
								<i className='fa fa-edit' aria-hidden='true'></i>
							</button>
							&nbsp;
							<Link to='/jenis'>
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
					name: "Furniture",
					action: (
						<>
							<button
								type='button'
								className='btn btn-warning'
								data-toggle='modal'
								data-target='#edit_category'
							>
								<i className='fa fa-edit' aria-hidden='true'></i>
							</button>
							&nbsp;
							<Link to='/jenis'>
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
	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			tableContent: this.state.tableContent.concat([this.state.fillCategory]),
			fillCategory: { name: "", action: "" },
			todoCategory: ""
		});
	};
	handleChange = event => {
		this.setState({
			todoCategory: event.target.value,
			fillCategory: {
				name: event.target.value,
				action: (
					<>
						<button
							type='button'
							className='btn btn-warning'
							data-toggle='modal'
							data-target='#edit_category'
						>
							<i className='fa fa-edit' aria-hidden='true'></i>
						</button>
						&nbsp;
						<Link to='/jenis'>
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
		});
	};

	render() {
		const forms1 = [
			{
				lableFor: "name",
				lableName: "Nama",
				inputAttr: {
					type: "text",
					placeholder: "Nama Kategori Barang",
					className: "form-control",
					name: "name",
					onChange: this.handleChange,
					value: this.state.todoCategory,
					required: true
				}
			}
		];
		return (
			<Master>
				<div className='row'>
					<div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
						<div className='padding_right'>
							<Section
								pageName={"Kategori Barang"}
								pageSubject={"Grup Habis Pakai"}
								box_header={"Buat Kategori Barang"}
								class_section={"padding_right"}
							>
								<form onSubmit={this.handleSubmit}>
									<FreeText formProp={forms1} />
									<div className='pull-right'>
										<Link to='/group-items'>
											<button type='button' className='btn btn-warning'>
												Kembali
											</button>
										</Link>
										&nbsp;
										<button type='submit' className='btn btn-success'>
											Tambah
										</button>
									</div>
								</form>
							</Section>
						</div>
					</div>
					<div className='col-xs-12 col-sm-8 col-md-8 col-lg-8'>
						<Section
							box_header={"Daftar Kategori Barang"}
							class_section='padding_left'
						>
							<Datatable
								headContent={this.state.tableHead}
								content={this.state.tableContent}
								tableKind={this.state.idTable}
							/>
							<div className='modal fade' id='edit_category'>
								<EditCategory />
							</div>
						</Section>
					</div>
				</div>
			</Master>
		);
	}
}

export default Category;
