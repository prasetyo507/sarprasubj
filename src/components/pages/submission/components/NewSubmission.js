import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import { dispatchSubmission } from "../store/actions/submissionAction";

import Section from "../../../common/Section";
import Master from "../../Master";
import Datatable from "../../../common/table/Datatable";
import HeaderSubmission from "./HeaderSubmission";

class NewSubmission extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resetHeader: false,
			headerForm: null,
			items: []
		};
		this.handleAddNewItem = this.handleAddNewItem.bind(this);
		this.subjectInputHandler = this.subjectInputHandler.bind(this);
	}

	handleAddNewItem() {
		// name and qty item column do not empty
		let itemName = $("input[name=item_name]").val();
		let itemQty = $("input[name=item_qty]").val();
		let itemType = $("#type option:selected").val();

		if (itemName === "" || itemQty === "" || itemType === "") {
			alert("Kolom Nama Barang, Quantity, dan Tipe barang tidak boleh kosong!");
			return;
		}

		let newItem = {
			id: `ITEM-${this.state.items.length + 1}`,
			item: itemName,
			type: itemType,
			qty: itemQty
		};
		newItem = [...this.state.items, newItem];
		this.setState({ items: newItem });

		// clear input column after add an item
		this.clearRowInput();
	}

	clearRowInput() {
		$("input[name=item_name]").val("");
		$("input[name=item_qty]").val("");
		$("#type").val("");
	}

	handleRemoveItem(id) {
		let filteredItem = this.state.items.filter(itemList => itemList.id !== id);
		this.setState({
			items: filteredItem
		});
	}

	// qty column must a number
	handleQtyInput(e) {
		if (isNaN(e.target.value)) {
			$('input[name="item_qty"]').val("");
			alert("Kolom QTY harus berupa angka!");
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.formHeader !== this.props.formHeader) {
			this.setState({ headerForm: this.props.formHeader });
		}
	}

	subjectInputHandler(dataHeader) {
		this.setState({ headerForm: dataHeader });
	}

	async handleSubmitSubmission() {
		const _ = require("lodash");
		const items = this.state.items.map(item => {
			return _.pick(item, ["item", "qty", "type"]);
		});

		if (this.state.headerForm.subject === "") {
			alert("Subjek tidak boleh kosong!");
			return;
		}

		if (items.length === 0) {
			alert("Item tidak boleh kosong!");
			return;
		}

		const payload = {
			...this.state.headerForm,
			items
		};

		await this.props.submitSubmission(payload);
		this.setState({ headerForm: null, items: [], resetHeader: true });
		alert("Pengajuan berhasil dikirim!");
		this.props.history.push("/submission");
	}

	render() {
		const tableHeader = [
			{
				column0: "ID Barang",
				column1: "Nama Barang",
				column2: "Tipe",
				column3: "QTY",
				column4: "Aksi"
			}
		];

		const tableInput = [
			{
				id: <p style={{ fontWeight: "bold", fontSize: "16px" }}>#</p>,
				item: (
					<input
						type='text'
						className='form-control'
						name='item_name'
						placeholder='masukan nama item'
					/>
				),
				tipe: (
					<select className='form-control' name='item_type' id='type'>
						<option value=''>-- Pilih Tipe Barang --</option>
						<option value='monitorpc'>Monitor PC</option>
						<option value='sepeda'>Sepeda</option>
						<option value='mejakerja'>Meja Kerja</option>
					</select>
				),
				qty: (
					<input
						type='text'
						className='form-control'
						name='item_qty'
						placeholder='masukan jumlah item'
						onChange={this.handleQtyInput}
					/>
				),
				action: (
					<button
						className='btn btn-success btn-sm'
						onClick={this.handleAddNewItem}
					>
						<i className='fa fa-plus'></i>
					</button>
				)
			}
		];

		// add new item to table content
		if (this.state.items !== "") {
			let newItemList = this.state.items.map(items => {
				let itemClone = { ...items };
				itemClone.action = (
					<button
						className='btn btn-danger btn-sm'
						onClick={() => this.handleRemoveItem(items.id)}
					>
						<i className='fa fa-minus'></i>
					</button>
				);
				return itemClone;
			});

			newItemList.map(newList => tableInput.push(newList));
		}

		return (
			<Master>
				<Section
					pageName={"Formulir Pengajuan"}
					pageSubject={"Buat pengajuan barang baru"}
				>
					<HeaderSubmission
						handleSubjectInput={this.subjectInputHandler}
						resetHeader={this.state.resetHeader}
					/>
					<hr />
					<Datatable headContent={tableHeader} content={tableInput} />
					<button
						className='btn btn-success pull-right'
						onClick={() => this.handleSubmitSubmission()}
					>
						<i className='fa fa-paper-plane'></i> Ajukan Formulir
					</button>
				</Section>
			</Master>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		submitSubmission: submissionData =>
			dispatch(dispatchSubmission(submissionData))
	};
};

export default connect(null, mapDispatchToProps)(NewSubmission);
