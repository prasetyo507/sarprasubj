import React, { Component } from "react";
import { FreeText, Select } from "../../common/FormGroup";
import Modal from "../../common/Modal";

class EditBarang extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "js/select2.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    const forms1 = [
      {
        lableFor: "name",
        lableName: "Nama",
        inputAttr: {
          type: "text",
          placeholder: "Nama Barang",
          className: "form-control",
          name: "name"
        }
      }
    ];
    const forms2 = [
      {
        selectName: "Tipe",
        selectAttr: {
          className: "form-control select2",
          name: "type"
        },
        optionList: [
          {
            inputAttr: {
              value: "handphone"
            },
            name: "Handphone"
          },
          {
            inputAttr: {
              value: "laptop"
            },
            name: "Laptop"
          },
          {
            inputAttr: {
              value: "monitor"
            },
            name: "Monitor"
          }
        ]
      }
    ];
    const forms3 = [
      {
        lableFor: "photo",
        lableName: "Foto",
        inputAttr: {
          type: "file",
          className: "form-control",
          name: "photo"
        }
      },
      {
        lableFor: "note",
        lableName: "Catatan",
        inputAttr: {
          type: "text",
          placeholder: "Keterangan Tambahan",
          className: "form-control",
          name: "note"
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
      <Modal title="Ubah Barang" save={save} close={close}>
        <form>
          <div className="col-md-12">
            <FreeText formProp={forms1} />
            <Select formProp={forms2} />
            <FreeText formProp={forms3} />
          </div>
        </form>
      </Modal>
    );
  }
}

export default EditBarang;
