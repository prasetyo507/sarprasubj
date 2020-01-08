import React, { Component } from "react";
import { FreeText } from "../../../common/FormGroup";
import Modal from "../../../common/Modal";
import { connect } from "react-redux";
import { dispatchEditSatuan } from "../store/actions/satuanAction";

class EditSatuan extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
    let script = document.createElement("script");
    script.innerHTML = "$('.select2').select2();";
    document.body.appendChild(script);
  }

  async handleSubmit(event) {
    event.preventDefault();
    let fillSatuan = {
      id: 1,
      kode: event.target.kode.value,
      name: event.target.name.value
    }
    await this.props.submitSatuan(fillSatuan.id, fillSatuan);
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
    const param = this.props.idSatuan;
    if (param != null) {
      var getEditSatuan = this.props.editSatuan.find(satuan => {
        return satuan.id === param;
      });
      var forms1 = [
        {
          lableFor: "kode",
          lableName: "Kode Satuan",
          inputAttr: {
            type: "text",
            placeholder: "Kode Satuan",
            className: "form-control",
            name: "kode",
            defaultValue: getEditSatuan.kode,
            maxLength: "3",
            required: true,
            readOnly: true
          }
        },
        {
          lableFor: "name",
          lableName: "Nama Satuan",
          inputAttr: {
            type: "text",
            placeholder: "Nama Satuan",
            className: "form-control",
            name: "name",
            defaultValue: getEditSatuan.name,
            required: true
          }
        }
      ];

      var save = (
        <button type="submit" className="btn btn-success pull-right">
          <i className='fa fa-edit'></i> Ubah
      </button>
      );
      var close = (
        <button
          type="button"
          className="btn btn-default pull-left"
          data-dismiss="modal"
        >
          Keluar
      </button>
      );
      return (
        <form onSubmit={this.handleSubmit} >
          <Modal title="Ubah Satuan" save={save} close={close}>
            <div className="col-md-12">
              <FreeText formProp={forms1} />
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
    submitSatuan: (index, satuanData) =>
      dispatch(dispatchEditSatuan(index, satuanData))
  };
};
const mapStateToProps = state => {
  return {
    editSatuan: state.satuan.satuanForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSatuan);
