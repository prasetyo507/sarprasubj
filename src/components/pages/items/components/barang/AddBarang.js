import React, { Component } from "react";
import { FreeText, Select, TextArea } from "../../../../common/FormGroup";
import Modal from "../../../../common/Modal";
import { connect } from "react-redux";
import { dispatchBarang } from "../../store/actions/itemsAction";

class AddBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    let script = document.createElement("script");
    script.innerHTML = "$('.select2').select2();";
    document.body.appendChild(script);
  }
  fileValidation() {

    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(filePath)) {
      alert('Gunakan File dengan format .jpeg, .gif atau .png');
      fileInput.value = '';
      return false;
    } else if (fileInput.files[0].size > 524288) {
      alert('Gunakan File dengan ukuran maksimal 512Kb');
      fileInput.value = '';
      return false;
    } else {
      if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          document.getElementById('imagePreview').innerHTML = '<img style="width:300px" src="' + e.target.result + '"/>';
          this.setState({ image: e.target.result })
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    }
  }
  async handleSubmit(event) {
    event.preventDefault();
    let fillBarang = {
      id: 1,
      nama: event.target.name.value,
      jenis: event.target.jenis.value,
      satuan: event.target.satuan.value,
      photo: this.state.image,
      note: event.target.note.value,
    }
    await this.props.submitBarang(fillBarang);
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
    const forms1 = [
      {
        lableFor: "name",
        lableName: "Nama",
        inputAttr: {
          type: "text",
          placeholder: "Nama Barang",
          className: "form-control",
          name: "name",
          required: true
        }
      }
    ];
    //Jenis
    if (this.props.jenis) {
      let selectJenis = this.props.jenis.map(lists => {
        var klasifikasi = "-"
        if (lists.classification === "IT") {
          klasifikasi = "Barang IT"
        } else if (lists.classification === "NONIT") {
          klasifikasi = "Barang Non IT"
        } else {
          klasifikasi = "-"
        }
        return {
          inputAttr: {
            value: lists.name
          },
          name: lists.name + "(" + klasifikasi + ")"
        }
      })
      let defaultJenis =
      {
        inputAttr: {
          value: "",
          disabled: true
        },
        name: "-- Pilih Jenis --"
      }
      selectJenis.unshift(defaultJenis)
      var forms2 = [{
        selectName: "Jenis",
        selectAttr: {
          className: "form-control select2",
          name: "jenis",
          required: true,
          defaultValue: ""
        },
        optionList: selectJenis
      }];
    }
    //Satuan
    if (this.props.satuan) {
      let selectSatuan = this.props.satuan.map(lists => {
        return {
          inputAttr: {
            value: lists.name
          },
          name: lists.name + "(" + lists.kode + ")"
        }
      })
      let defaultSatuan =
      {
        inputAttr: {
          value: "",
          disabled: true
        },
        name: "-- Pilih Satuan --"
      }
      selectSatuan.unshift(defaultSatuan)
      var forms3 = [{
        selectName: "Satuan",
        selectAttr: {
          className: "form-control select2",
          name: "satuan",
          required: true,
          defaultValue: ""
        },
        optionList: selectSatuan
      }];
    }
    const forms4 = [
      {
        lableFor: "photo",
        lableName: "Foto",
        inputAttr: {
          type: "file",
          className: "form-control",
          name: "photo",
          id: "file",
          onChange: () => this.fileValidation()
        }
      }
    ];
    const forms5 = [
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
        <Modal title="Tambah Barang Baru" save={save} close={close}>
          <div className="col-md-12">
            <FreeText formProp={forms1} />
            <Select formProp={forms2} />
            <Select formProp={forms3} />
            <FreeText formProp={forms4} />
            <small>Gunakan File dengan format .jpeg, .gif atau .png<br />
              Gunakan File dengan ukuran maksimal 512Kb</small>
            <div id="imagePreview"></div>
            <TextArea formProp={forms5} />
          </div>
          <div id="snackbar">Berhasil...</div>
        </Modal>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submitBarang: barangData =>
      dispatch(dispatchBarang(barangData))
  };
};
const mapStateToProps = state => {
  return {
    jenis: state.jenis.jenisForm,
    satuan: state.satuan.satuanForm
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddBarang);
