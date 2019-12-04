import React, { Component } from "react";
import "./Catalogue.css";
import Box from "../../common/Box";
import AddCatalogue from "./AddCatalogue";
import EditCatalogue from "./EditCatalogue";
import { SelectHorizontal } from "../../common/FormGroup";
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
    const sorting = [
      {
        selectName: "Urutkan :",
        labelAttr: {
          className: "col-sm-4 control-label"
        },
        colSelect: "col-sm-8",
        selectAttr: {
          className: "form-control",
          name: "tipe_garansi"
        },
        optionList: [
          {
            inputAttr: {
              value: "Terbaru"
            },
            name: "Terbaru"
          },
          {
            inputAttr: {
              value: "Terlama"
            },
            name: "Terlama"
          },
          {
            inputAttr: {
              value: "Harga Tertinggi"
            },
            name: "Harga Tertinggi"
          },
          {
            inputAttr: {
              value: "Harga Terendah"
            },
            name: "Harga Terendah"
          }
        ]
      }
    ];
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
        <div className="row">
          <div className="col-md-6">
            <form action="#!" method="get">
              <div className="input-group">
                <input
                  type="text"
                  name="q"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button
                    type="submit"
                    name="search"
                    id="search-btn"
                    className="btn btn-flat"
                  >
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <form action="#!" method="get" className="form-horizontal">
              <SelectHorizontal formProp={sorting} />
            </form>
          </div>
        </div>
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
