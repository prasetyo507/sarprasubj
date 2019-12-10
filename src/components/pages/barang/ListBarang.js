import React, { Component } from "react";
import AddBarang from "./AddBarang";
import EditBarang from "./EditBarang";
import Datatable from "../../table/Datatable";
class ListBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idTable: "example1",
      tableHead: [
        {
          column0: "Nama",
          column1: "Tipe",
          column2: "Kategori",
          column3: "Grup",
          column4: "Gambar",
          column5: "Aksi"
        }
      ],
      tableContent: [
        {
          name: "Nokia 3650",
          type: "Handphone",
          category: "Elektronik",
          Group: "Tidak Habis pakai",
          Image: "Gambar nokia",
          action: (
            <button
              type="button"
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#modal_edit"
            >
              <i className="fa fa-edit" aria-hidden="true"></i>
            </button>
          )
        },
        {
          name: "I Phone x",
          type: "Handphone",
          category: "Elektronik",
          Group: "Tidak Habis pakai",
          Image: "Gambar nokia",
          action: (
            <button
              type="button"
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#modal_edit"
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
          data-target="#modal"
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
          &nbsp;Tambah
        </button>
        <hr />
        <Datatable
          headContent={this.state.tableHead}
          content={this.state.tableContent}
          tableKind={this.state.idTable}
        />
        <div className="modal fade" id="modal">
          <AddBarang />
        </div>
        <div className="modal fade" id="modal_edit">
          <EditBarang />
        </div>
      </>
    );
  }
}

export default ListBarang;
