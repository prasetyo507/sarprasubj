import React, { Component } from "react";
import { FreeText } from "../../common/FormGroup";
import Modal from "../../common/Modal";

class EditItemGroup extends Component {
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
          placeholder: "Nama Grup Barang",
          className: "form-control",
          name: "name",
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
      <form>
        <Modal title="Ubah Grup Barang" save={save} close={close}>
          <div className="col-md-12">
            <FreeText formProp={forms1} />
          </div>
        </Modal>
      </form>
    );
  }
}

export default EditItemGroup;
