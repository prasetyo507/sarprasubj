import React, { Component } from "react";
import { FreeText } from "../../../common/FormGroup";
import Modal from "../../../common/Modal";
import { connect } from "react-redux";
import { dispatchSatuan } from "../store/actions/satuanAction";

class AddSatuan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    let script = document.createElement("script");
    script.innerHTML = "$('.select2').select2();";
    document.body.appendChild(script);
  }
  handleChange(event) {
    var checkCode = this.props.satuan.find(satuan => {
      return satuan.kode === event.target.value;
    });
    var notice = document.getElementById("notice");
    var btnSubmit = document.getElementById("save");
    if (checkCode) {
      notice.innerHTML = '<small style="color:red">Kode sudah pernah digunakan sebelumnya</small>';
      event.target.value = ""
      btnSubmit.disabled = "disabled";
    } else {
      notice.innerHTML = '';
      btnSubmit.disabled = "";

    }
  }
  async handleSubmit(event) {
    event.preventDefault();
    let fillSatuan = {
      id: 1,
      kode: event.target.kode.value,
      name: event.target.name.value
    }
    await this.props.submitSatuan(fillSatuan);
    var my_form = document.getElementById("myForm");
    my_form.reset()
    /* Toast */
    var toast = document.getElementById("snackbar");
    /* Show Toast */
    toast.className = "show";
    setTimeout(() => {
      /* hide Toast after 2 seconds */
      toast.className = toast.className.replace("show", "");
      this.props.hide();
    }, 2000);
  }
  render() {
    var forms1 = [
      {
        lableFor: "kode",
        lableName: "Kode Satuan",
        inputAttr: {
          type: "text",
          placeholder: "Kode Satuan",
          className: "form-control",
          name: "kode",
          maxLength: "3",
          required: true,
          onChange: this.handleChange
        }
      }]
    var forms2 = [
      {
        lableFor: "name",
        lableName: "Nama Satuan",
        inputAttr: {
          type: "text",
          placeholder: "Nama Satuan",
          className: "form-control",
          name: "name",
          required: true
        }
      }
    ];
    const save = (
      <button type="submit" className="btn btn-success pull-right" id="save" >
        <i className='fa fa-save'></i> Simpan
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
      <form onSubmit={this.handleSubmit} id="myForm">
        <Modal title="Tambah Satuan Baru" save={save} close={close}>
          <div className="col-md-12">
            <FreeText formProp={forms1} />
            <div id="notice"></div>
            <FreeText formProp={forms2} />
          </div>
          <div id="snackbar">Berhasil...</div>
        </Modal>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submitSatuan: satuanData =>
      dispatch(dispatchSatuan(satuanData))
  };
};
const mapStateToProps = state => {
  return {
    satuan: state.satuan.satuanForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSatuan);
