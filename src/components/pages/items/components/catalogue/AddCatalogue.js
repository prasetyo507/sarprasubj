import React, { Component } from "react";
import { FreeText, Select } from "../../../../common/FormGroup";
import Modal from "../../../../common/Modal";
import { connect } from "react-redux";
import { dispatchCatalogue } from "../../store/actions/itemsAction";

class AddCatalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    let script = document.createElement("script");
    script.innerHTML = "$('.select2').select2()";
    document.body.appendChild(script);
  }
  // price column must a number
  handleChange(e) {
    if (isNaN(e.target.value)) {
      e.target.value = "";
      alert("Harga harus berupa angka!");
    }
  }
  async handleSubmit(event) {
    event.preventDefault();
    let fillCatalogue = {
      id: 1,
      name: event.target.name.value,
      price: event.target.price.value,
      vendor: event.target.vendor.value,
      tipe_garansi: event.target.tipe_garansi.value,
      waktu_garansi: event.target.waktu_garansi.value
    }
    await this.props.submitCatalogue(fillCatalogue);
    var my_form = document.getElementById("myForm");
    my_form.reset()
    /* Toast */
    var toast = document.getElementById("snackbar4");
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
        lableFor: "price",
        lableName: "Harga",
        inputAttr: {
          type: "text",
          placeholder: "Harga Barang",
          className: "form-control",
          name: "price",
          required: true,
          onChange: this.handleChange,
          maxLength: "15"
        }
      }
    ];
    //barang
    if (this.props.barang) {
      let selectBarang = this.props.barang.map(lists => {
        return {
          inputAttr: {
            value: lists.nama
          },
          name: lists.nama
        }
      })
      let defaultBarang =
      {
        inputAttr: {
          value: "",
          disabled: true
        },
        name: "-- Pilih Barang --"
      }
      selectBarang.unshift(defaultBarang)
      var formBarang = [{
        selectName: "Nama Barang",
        selectAttr: {
          className: "form-control select2",
          name: "name",
          required: true,
          defaultValue: ""
        },
        optionList: selectBarang
      }];
    }
    //vendor
    if (this.props.vendor) {
      let selectVendor = this.props.vendor.map(lists => {
        return {
          inputAttr: {
            value: lists.nama
          },
          name: lists.nama
        }
      })
      let defaultVendor =
      {
        inputAttr: {
          value: "",
          disabled: true
        },
        name: "-- Pilih Vendor --"
      }
      selectVendor.unshift(defaultVendor)
      var formVendor = [{
        selectName: "Vendor",
        selectAttr: {
          className: "form-control select2",
          name: "vendor",
          required: true,
          defaultValue: ""
        },
        optionList: selectVendor
      }];
    }

    const forms4 = [
      {
        selectName: "Tipe Garansi",
        selectAttr: {
          className: "form-control select2",
          name: "tipe_garansi",
          required: true,
          defaultValue: ""
        },
        optionList: [
          {
            inputAttr: {
              value: "",
              disabled: true
            },
            name: "-- Pilih Garansi --"
          },
          {
            inputAttr: {
              value: "Tidak bergaransi"
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
          name: "waktu_garansi"
        }
      }
    ];
    const save = (
      <button type="submit" className="btn btn-success pull-right" id="save">
        <i className='fa fa-save'></i>  Simpan
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
      <form onSubmit={this.handleSubmit} id="myForm" >
        <Modal title="Tambah Data Katalog" save={save} close={close}>
          <div className="col-md-12">
            <Select formProp={formBarang} />
            <Select formProp={formVendor} />
            <FreeText formProp={forms1} />
            <Select formProp={forms4} />
            <FreeText formProp={forms3} />
          </div>
          <div id="snackbar4">Berhasil...</div>
        </Modal>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitCatalogue: catalogueData =>
      dispatch(dispatchCatalogue(catalogueData))
  };
};
const mapStateToProps = state => {
  return {
    barang: state.barang.barangForm,
    vendor: state.vendor.vendorForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCatalogue);
