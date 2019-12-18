import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";
import Datatable from "../../common/table/Datatable";
import { Link } from "react-router-dom";
import { FreeText, Option } from "../../common/FormGroup";
import "./Category.css";
import EditCategory from "./EditCategory";
class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			idTable: "example1",
			tableHead: [
				{
					column0: "Kategori",
					column1: "Grup",
					column3: "Aksi"
				}
			],
			tableContent: [
				{
					name: "Alat Tulis Kantor",
					grup: "Tidak Habis Pakai",
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
					grup: "Tidak Habis Pakai",
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
		var grup_barang = "-"
		if (event.target.optgrup.value === "CONSUMABLE") {
			grup_barang = "Habis Pakai"
		} else if (event.target.optgrup.value === "NONCONSUMABLE") {
			grup_barang = "TIdak Habis Pakai"
		} else {
			grup_barang = "-"
		}

		let fillCategory = {
			name: event.target.name.value,
			grup: grup_barang,
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
		this.setState({
			tableContent: [...this.state.tableContent, fillCategory]
		})
		event.target.reset();
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
					required: true
				}
			}
		];
		const radiobtn = [
			{
				optionName: "Grup Barang",
				optionList: [
					{
						optionLable: "Habis Pakai",
						inputAttr: {
							type: "radio",
							name: "optgrup",
							value: "CONSUMABLE",
							required: true
						}
					},
					{
						optionLable: "Tidak Habis Pakai",
						inputAttr: {
							type: "radio",
							name: "optgrup",
							value: "NONCONSUMABLE",
							required: true
						}
					}
				]
			}
		]
		return (
			<Master>
				<div className='row'>
					<div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
						<div className='padding_right'>
							<Section
								pageName={"Kategori Barang"}
								pageSubject={"Kelola Kategori Barang"}
								box_header={"Buat Kategori Barang"}
								class_section={"padding_right"}
							>
								<form onSubmit={this.handleSubmit} name="forms">
									<FreeText formProp={forms1} />
									<Option formProp={radiobtn} />
									<div className='pull-right'>

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
			</Master >
		);
	}
}

export default Category;
