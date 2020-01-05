import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";
import Datatable from "../../common/table/Datatable";
import { Link } from "react-router-dom";
import { FreeText, Option } from "../../common/FormGroup";
import "./Category.css";
import EditJenis from "./EditJenis";
class Jenis extends Component {
	constructor(props) {
		super(props);
		this.state = {
			idTable: "example1",
			tableHead: [
				{
					column0: "Kategori",
					column1: "Klasifikasi",
					column3: "Aksi"
				}
			],
			tableContent: [
				{
					name: "Pulpen",
					classification: "Barang Non IT",
					action: (
						<>
							<button
								type='button'
								className='btn btn-warning'
								data-toggle='modal'
								data-target='#edit_jenis'
							>
								<i className='fa fa-edit' aria-hidden='true'></i>
							</button>
							&nbsp;
							<button type='button' className='btn btn-danger'>
								<i className='fa fa-close' aria-hidden='true'></i>
							</button>
						</>
					)
				},
				{
					name: "Penggaris",
					classification: "Barang Non IT",
					action: (
						<>
							<button
								type='button'
								className='btn btn-warning'
								data-toggle='modal'
								data-target='#edit_jenis'
							>
								<i className='fa fa-edit' aria-hidden='true'></i>
							</button>
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
		var klasifikasi = "-";
		if (event.target.optit.value === "IT") {
			klasifikasi = "Barang IT";
		} else if (event.target.optit.value === "NONIT") {
			klasifikasi = "Barang Non IT";
		} else {
			klasifikasi = "-";
		}
		let fillJenis = {
			name: event.target.name.value,
			classification: klasifikasi,
			action: (
				<>
					<button
						type='button'
						className='btn btn-warning'
						data-toggle='modal'
						data-target='#edit_jenis'
					>
						<i className='fa fa-edit' aria-hidden='true'></i>
					</button>
					&nbsp;
					<button type='button' className='btn btn-danger'>
						<i className='fa fa-close' aria-hidden='true'></i>
					</button>
				</>
			)
		};
		this.setState({
			tableContent: [...this.state.tableContent, fillJenis]
		});
		event.target.reset();
	};

	render() {
		const forms1 = [
			{
				lableFor: "name",
				lableName: "Nama",
				inputAttr: {
					type: "text",
					placeholder: "Nama Jenis Barang",
					className: "form-control",
					name: "name",
					required: true
				}
			}
		];
		const radiobtn = [
			{
				optionName: "Klasifikasi Barang",
				optionList: [
					{
						optionLable: "Barang IT",
						inputAttr: {
							type: "radio",
							name: "optit",
							value: "IT",
							required: true
						}
					},
					{
						optionLable: "Barang Non IT",
						inputAttr: {
							type: "radio",
							name: "optit",
							value: "NONIT",
							required: true
						}
					}
				]
			}
		];
		return (
			<Master>
				<div className='row'>
					<div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
						<div className='padding_right'>
							<Section
								pageName={"Jenis Barang"}
								pageSubject={"Kategori Alat Tulis Kantor"}
								box_header={"Buat Jenis Barang"}
								class_section={"padding_right"}
							>
								<form onSubmit={this.handleSubmit} name='forms'>
									<FreeText formProp={forms1} />
									<Option formProp={radiobtn} />

									<div className='pull-right'>
										<Link to='/category'>
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
				</div>
				<Section
					box_header={"Daftar Jenis Barang"}
					class_section='col-xs-12 col-sm-8 col-md-8 col-lg-8'
				>
					<Datatable
						headContent={this.state.tableHead}
						content={this.state.tableContent}
						tableKind={this.state.idTable}
					/>
					<div className='modal fade' id='edit_jenis'>
						<EditJenis />
					</div>
				</Section>
			</Master>
		);
	}
}

export default Jenis;
