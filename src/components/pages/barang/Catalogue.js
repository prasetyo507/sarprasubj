import React, { Component } from "react";
import "./Catalogue.css";
import AddCatalogue from "./AddCatalogue";
import EditCatalogue from "./EditCatalogue";
import Datatable from "../../table/Datatable";
class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idTable: "example2",
      tableHead: [
        {
          column0: "Nama Barang",
          column1: "Vendor",
          column2: "Harga",
          column3: "Grup",
          column4: "Kategory",
          column5: "Jenis",
          column6: "Aksi"
        }
      ],
      tableContent: [
        {
          name: "Laptop Tuf Gaming",
          vendor: "King",
          prive: "Rp.50.000",
          grup: "Tidak Habis Pakai",
          category: "Elektronik",
          jenis: "Laptop",
          action: (
            <button
              type="button"
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#modal_edit_catalogue"
            >
              <i className="fa fa-edit" aria-hidden="true"></i>
            </button>
          )
        },
        {
          name: "I Phone x",
          vendor: "Enter",
          price: "Rp.20.000",
          grup: "Tidak Habis Pakai",
          category: "Elektronik",
          jenis: "Handphone",
          action: (
            <button
              type="button"
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#modal_edit_catalogue"
            >
              <i className="fa fa-edit" aria-hidden="true"></i>
            </button>
          )
        }
      ]
    };
  }
  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#modal_catalogue"
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
          &nbsp;Tambah
        </button>

        <hr />

        <Datatable
          headContent={this.state.tableHead}
          content={this.state.tableContent}
          idTable={this.state.idTable}
        />
        <div className="modal fade" id="modal_catalogue">
          <AddCatalogue />
        </div>
        <div className="modal fade" id="modal_edit_catalogue">
          <EditCatalogue />
        </div>
      </>
    );
  }
}

export default Catalogue;
