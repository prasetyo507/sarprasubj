import React, { Component } from "react";
import { FreeText, Option } from "../../common/FormGroup";
import Modal from "../../common/Modal";

class EditJenis extends Component {
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
          placeholder: "Nama Jenis Barang",
          className: "form-control",
          name: "name",
          required: true,
          autofocus: ""
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
        <Modal title="Ubah Jenis Barang" save={save} close={close}>
          <div className="col-md-12">
            <FreeText formProp={forms1} />
            <Option formProp={radiobtn} />
          </div>
        </Modal>
      </form>
    );
  }
}

export default EditJenis;
