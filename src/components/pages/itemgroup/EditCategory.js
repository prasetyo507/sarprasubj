import React, { Component } from "react";
import { FreeText, Option } from "../../common/FormGroup";
import Modal from "../../common/Modal";

class EditCategory extends Component {
  constructor() {
    super();
    this.state = {};
  }
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
          required: true,
          autofocus: ""
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
      <form>
        <Modal title="Ubah Kategori Barang" save={save} close={close}>
          <div className="col-md-12">
            <FreeText formProp={forms1} />
            <Option formProp={radiobtn} />
          </div>
        </Modal>
      </form>
    );
  }
}

export default EditCategory;
