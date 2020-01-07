import React, { Component } from "react";
import { FreeText, Select, TextArea } from "../../../../common/FormGroup";
import Modal from "../../../../common/Modal";
import { connect } from "react-redux";
import { dispatchEditBarang } from "../../store/actions/itemsAction";

class EditBarang extends Component {
  constructor() {
    super();
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

    var fileInput = document.getElementById('files');
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
          document.getElementById('imagePreview2').innerHTML = '<img style="width:300px" src="' + e.target.result + '"/>';
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
      photo: this.state.image,
      note: event.target.note.value,
    }
    await this.props.submitBarang(fillBarang.id, fillBarang);
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
    const param = this.props.idBarang;
    if (param != null) {
      var getEditBarang = this.props.editBarang.find(barang => {
        return barang.id === param;
      });
      var forms1 = [
        {
          lableFor: "name",
          lableName: "Nama",
          inputAttr: {
            type: "text",
            placeholder: "Nama Barang",
            className: "form-control",
            name: "name",
            defaultValue: getEditBarang.nama,
            required: true
          }
        }
      ];
      var forms2 = [
        {
          selectName: "Jenis",
          selectAttr: {
            className: "form-control select2",
            name: "jenis",
            defaultValue: getEditBarang.jenis,
            required: true
          },
          optionList: [
            {
              inputAttr: {
                value: "",
                disabled: true
              },
              name: "-- Pilih Jenis --"
            },
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
      var forms3 = [
        {
          lableFor: "photo",
          lableName: "Foto",
          inputAttr: {
            type: "file",
            className: "form-control",
            name: "photo",
            id: "files",
            onChange: () => this.fileValidation()
          }
        }
      ];
      var forms4 = [
        {
          lableFor: "note",
          lableName: "Catatan",
          inputAttr: {
            type: "text",
            placeholder: "Keterangan Tambahan",
            className: "form-control",
            name: "note",
            defaultValue: getEditBarang.note
          }
        }
      ];
      var save = (
        <button type="submit" className="btn btn-primary pull-right">
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
          <Modal title="Ubah Barang" save={save} close={close}>
            <div className="col-md-12">
              <FreeText formProp={forms1} />
              <Select formProp={forms2} />
              <FreeText formProp={forms3} />
              <small>Gunakan File dengan format .jpeg, .gif atau .png<br />
                Gunakan File dengan ukuran maksimal 512Kb</small>
              <div id="imagePreview2"></div>
              <TextArea formProp={forms4} />
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
    submitBarang: (index, barangData) =>
      dispatch(dispatchEditBarang(index, barangData))
  };
};
const mapStateToProps = state => {
  return {
    editBarang: state.barang.barangForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBarang);
