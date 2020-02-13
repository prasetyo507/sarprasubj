import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import { dispatchSubmission } from "../store/actions/submissionAction";

import Section from "../../../common/Section";
import Master from "../../Master";
import Datatable from "../../../common/table/Datatable";
import { HeaderService } from "./HeaderService";
import { Link } from "react-router-dom";

class NewSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormSubmited: false,
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
    let itemTypeText = $("#type option:selected").text();
    let itemNote = $("input[name=item_note]").val();

    if (itemName === "" || itemQty === "" || itemType === "") {
      alert("Kolom Nama Barang, Quantity, dan Tipe barang tidak boleh kosong!");
      return;
    }

    let newItem = {
      id: this.state.items.length + 1,
      type: itemType,
      typeText: itemTypeText,
      item: itemName,
      isApprove: 0,
      approvalNote: "",
      qty: itemQty,
      note: itemNote
    };
    newItem = [...this.state.items, newItem];
    this.setState({ items: newItem });

    // clear input column after add an item
    this.clearRowInput();
  }

  clearRowInput() {
    $(".form-input").val("");
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
      return _.pick(item, [
        "item",
        "qty",
        "type",
        "note",
        "isApprove",
        "approvalNote"
      ]);
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
    this.setState({
      headerForm: null,
      items: [],
      resetHeader: true,
      isFormSubmited: true
    });
    /* Toast */
    var toast = document.getElementById("snackbar");
    /* Show Toast */
    toast.className = "show";
    setTimeout(() => {
      /* hide Toast after 1.2 seconds */
      toast.className = toast.className.replace("show", "");
      this.props.history.push("/submission");
    }, 1200);
  }

  render() {
    const tableHeader = [
      {
        column0: "Jenis",
        column1: "Nama Barang",
        column2: "QTY",
        column3: "Catatan",
        column4: "Aksi"
      }
    ];

    const tableInput = [
      {
        tipe: (
          <select
            className="form-control form-input"
            name="item_type"
            id="type"
          >
            <option value="">-- Pilih Jenis Barang --</option>
            <option value="monitorpc">Monitor PC</option>
            <option value="sepeda">Sepeda</option>
            <option value="mejakerja">Meja Kerja</option>
          </select>
        ),
        item: (
          <input
            type="text"
            className="form-control form-input"
            name="item_name"
            placeholder="masukan nama item"
          />
        ),
        qty: (
          <input
            type="text"
            className="form-control form-input"
            name="item_qty"
            placeholder="masukan jumlah item"
            onChange={this.handleQtyInput}
          />
        ),
        note: (
          <input
            type="text"
            className="form-control form-input"
            name="item_note"
            placeholder="masukan keterangan tambahan"
          />
        ),
        action: (
          <button
            className="btn btn-success btn-sm"
            onClick={this.handleAddNewItem}
          >
            <i className="fa fa-plus"></i>
          </button>
        )
      }
    ];

    // add new item to table content
    if (this.state.items !== "") {
      let newItemList = this.state.items.map(items => {
        let itemClone = { ...items };
        delete itemClone.id;
        delete itemClone.type;
        delete itemClone.isApprove;
        delete itemClone.approvalNote;
        itemClone.action = (
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.handleRemoveItem(items.id)}
          >
            <i className="fa fa-minus"></i>
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
          box_header={
            <HeaderService
              handleSubjectInput={this.subjectInputHandler}
              resetHeader={this.state.resetHeader}
            />
          }
        >
          <Datatable headContent={tableHeader} content={tableInput} />
          <button
            className="btn btn-success pull-right"
            onClick={() => this.handleSubmitSubmission()}
          >
            <i className="fa fa-paper-plane"></i> Ajukan
          </button>
          <Link to="/submission" className="btn btn-warning">
            <i className="fa fa-chevron-left"></i> Batalkan dan Kembali
          </Link>

          {/* toast */}
          <div id="snackbar">Pengajuan berhasil diajukan</div>
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
