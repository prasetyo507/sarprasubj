import React, { Component } from "react";
import "./Catalogue.css";
import Box from "../../common/Box";
import AddCatalogue from "./AddCatalogue";
import EditCatalogue from "./EditCatalogue";
class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BoxProperty: [
        {
          col: "col-md-3 col-lg-2 col-sm-4 col-xs-6",
          src: "../../dist/img/user4-128x128.jpg",
          alt: "123",
          name: "Barang satu",
          price: "Rp.10.000",
          btn_tooltip: "Ubah katalog",
          btn_className: "btn btn-warning btn-xs",
          mdl_target: "#modal_edit_catalogue",
          icon: "fa fa-edit"
        },
        {
          col: "col-md-3 col-lg-2 col-sm-4 col-xs-6",
          src: "../../dist/img/user4-128x128.jpg",
          alt: "456",
          name: "Barang dua",
          price: "Rp.20.000",
          btn_tooltip: "Ubah katalog",
          btn_className: "btn btn-warning btn-xs",
          mdl_target: "#modal_edit_catalogue",
          icon: "fa fa-edit"
        },
        {
          col: "col-md-3 col-lg-2 col-sm-4 col-xs-6",
          src: "../../dist/img/user4-128x128.jpg",
          alt: "789",
          name: "Barang tiga",
          price: "Rp.30.000",
          btn_tooltip: "Ubah katalog",
          btn_className: "btn btn-warning btn-xs",
          mdl_target: "#modal_edit_catalogue",
          icon: "fa fa-edit"
        },
        {
          col: "col-md-3 col-lg-2 col-sm-4 col-xs-6",
          src: "../../dist/img/user4-128x128.jpg",
          alt: "123",
          name: "Barang satu",
          price: "Rp.10.000",
          btn_tooltip: "Ubah katalog",
          btn_className: "btn btn-warning btn-xs",
          mdl_target: "#modal_edit_catalogue",
          icon: "fa fa-edit"
        },
        {
          col: "col-md-3 col-lg-2 col-sm-4 col-xs-6",
          src: "../../dist/img/user4-128x128.jpg",
          alt: "456",
          name: "Barang dua",
          price: "Rp.20.000",
          btn_tooltip: "Ubah katalog",
          btn_className: "btn btn-warning btn-xs",
          mdl_target: "#modal_edit_catalogue",
          icon: "fa fa-edit"
        },
        {
          col: "col-md-3 col-lg-2 col-sm-4 col-xs-6",
          src: "../../dist/img/user4-128x128.jpg",
          alt: "789",
          name: "Barang tiga",
          price: "Rp.30.000",
          btn_tooltip: "Ubah katalog",
          btn_className: "btn btn-warning btn-xs",
          mdl_target: "#modal_edit_catalogue",
          icon: "fa fa-edit"
        },
        {
          col: "col-md-3 col-lg-2 col-sm-4 col-xs-6",
          src: "../../dist/img/user4-128x128.jpg",
          alt: "123",
          name: "Barang satu",
          price: "Rp.10.000",
          btn_tooltip: "Ubah katalog",
          btn_className: "btn btn-warning btn-xs",
          mdl_target: "#modal_edit_catalogue",
          icon: "fa fa-edit"
        },
        {
          col: "col-md-3 col-lg-2 col-sm-4 col-xs-6",
          src: "../../dist/img/user4-128x128.jpg",
          alt: "456",
          name: "Barang dua",
          price: "Rp.20.000",
          btn_tooltip: "Ubah katalog",
          btn_className: "btn btn-warning btn-xs",
          mdl_target: "#modal_edit_catalogue",
          icon: "fa fa-edit"
        },
        {
          col: "col-md-3 col-lg-2 col-sm-4 col-xs-6",
          src: "../../dist/img/user4-128x128.jpg",
          alt: "789",
          name: "Barang tiga",
          price: "Rp.30.000",
          btn_tooltip: "Ubah katalog",
          btn_className: "btn btn-warning btn-xs",
          mdl_target: "#modal_edit_catalogue",
          icon: "fa fa-edit"
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
        <Box BoxProperty={this.state.BoxProperty} />
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
