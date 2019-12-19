import React, { Component } from "react";
import { FreeText, Select } from "../../common/FormGroup";
import Modal from "../../common/Modal";

class EditCatalogue extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    let script = document.createElement("script");
    script.innerHTML = "$('.select2').select2();";
    document.body.appendChild(script);
  }
  // price column must a number
  handleChange(e) {
    if (isNaN(e.target.value)) {
      e.target.value = "";
      alert("Harga harus berupa angka!");
    }
  }
  render() {
    const forms1 = [
      {
        lableFor: "price",
        lableName: "Harga",
        inputAttr: {
          type: "text",
          placeholder: "Harga Barang",
          className: "form-control",
          name: "price",
          required: true,
          autofocus: "",
          onChange: this.handleChange,
          maxLength: "15"
        }
      }
    ];
    const forms2 = [
      {
        selectName: "Nama Barang",
        selectAttr: {
          className: "form-control select2",
          name: "name",
          required: true
        },
        optionList: [
          {
            inputAttr: {
              value: "handphone Nokia 3610"
            },
            name: "handphone Nokia 3610"
          },
          {
            inputAttr: {
              value: "laptop Asus Tuf Gaming"
            },
            name: "laptop Asus Tuf Gaming"
          },
          {
            inputAttr: {
              value: "monitor toshiba"
            },
            name: "Monitor toshiba"
          }
        ]
      },
      {
        selectName: "Vendor",
        selectAttr: {
          className: "form-control select2",
          name: "vendor",
          required: true
        },
        optionList: [
          {
            inputAttr: {
              value: "king"
            },
            name: "king Computer"
          },
          {
            inputAttr: {
              value: "enter"
            },
            name: "Enter Komputer"
          }
        ]
      }
    ];
    const forms4 = [
      {
        selectName: "Tipe Garansi",
        selectAttr: {
          className: "form-control",
          name: "tipe_garansi",
          required: true
        },
        optionList: [
          {
            inputAttr: {
              value: "-"
            },
            name: "Tidak bergaransi"
          },
          {
            inputAttr: {
              value: "resmi"
            },
            name: "Resmi"
          },
          {
            inputAttr: {
              value: "distributor"
            },
            name: "Distributor"
          }
        ]
      }
    ];
    const forms3 = [
      {
        lableFor: "waktu_garansi",
        lableName: "Waktu Garansi",
        inputAttr: {
          type: "number",
          placeholder: "Jangka Waktu Garansi (Bulan)",
          className: "form-control",
          name: "waktu_garansi",
          required: true
        }
      }
    ];
    const save = (
      <button type="submit" className="btn btn-primary pull-right">
        Ubah
      </button>
    );
    const close = (
      <button
        type="button"
        className="btn btn-default pull-left"
        data-dismiss="modal"
      >
        Keluar
      </button>
    );
    return (
      <Modal title="Ubah Data Katalog" save={save} close={close}>
        <form>
          <div className="col-md-12">
            <Select formProp={forms2} />
            <FreeText formProp={forms1} />
            <Select formProp={forms4} />
            <FreeText formProp={forms3} />
          </div>
        </form>
      </Modal>
    );
  }
}

export default EditCatalogue;
