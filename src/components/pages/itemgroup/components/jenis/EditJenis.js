import React, { Component } from "react";
import { FreeText, Option } from "../../../../common/FormGroup";
import Modal from "../../../../common/Modal";
import { dispatchEditJenis } from "../../store/actions/itemgroupAction";
import { connect } from "react-redux";

class EditJenis extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    let fillJenis = {
      id: 1,
      id_kategori: event.target.hidden.value,
      name: event.target.name.value,
      classification: event.target.optit.value
    }
    await this.props.submitJenis(fillJenis.id, fillJenis);
    /* Toast */
    var toast = document.getElementById("snackbar3");
    /* Show Toast */
    toast.className = "show";
    setTimeout(() => {
      /* hide Toast after 2 seconds */
      toast.className = toast.className.replace("show", "");
      this.props.hide();
    }, 2000);
  }
  render() {
    const param = this.props.idJenis;
    if (param) {
      var getEditJenis = this.props.editJenis.find(jenis => {
        return jenis.id === param;
      });
      var forms1 = [
        {
          lableFor: "name",
          lableName: "Nama",
          inputAttr: {
            type: "text",
            placeholder: "Nama Jenis Barang",
            className: "form-control",
            name: "name",
            required: true,
            defaultValue: getEditJenis.name
          }
        }
      ];
      var radiobtn = [
        {
          optionName: "Klasifikasi Barang",
          optionList: [
            {
              optionLable: "Barang IT",
              inputAttr: {
                type: "radio",
                name: "optit",
                value: "IT",
                required: true,
                defaultChecked: getEditJenis.classification === "IT" ? true : false
              }
            },
            {
              optionLable: "Barang Non IT",
              inputAttr: {
                type: "radio",
                name: "optit",
                value: "NONIT",
                required: true,
                defaultChecked: getEditJenis.classification === "NONIT" ? true : false
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
        <form onSubmit={this.handleSubmit}>
          <Modal title="Ubah Jenis Barang" save={save} close={close}>
            <div className="col-md-12">
              <FreeText formProp={forms1} />
              <input type="hidden" name="id_kategori" defaultValue={getEditJenis.id_kategori} />
              <Option formProp={radiobtn} />
            </div>
            <div id="snackbar3">Berhasil...</div>
          </Modal>
        </form>
      );
    } else { return false }
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submitJenis: (index, jenisData) =>
      dispatch(dispatchEditJenis(index, jenisData))
  };
};
const mapStateToProps = state => {
  return {
    editJenis: state.jenis.jenisForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditJenis);
