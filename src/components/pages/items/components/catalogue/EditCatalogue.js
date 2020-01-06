import React, { Component } from "react";
import { FreeText, Select } from "../../../../common/FormGroup";
import Modal from "../../../../common/Modal";
import { dispatchEditCatalogue } from "../../store/actions/itemsAction";
import { connect } from "react-redux";

class EditCatalogue extends Component {
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
    await this.props.submitCatalogue(fillCatalogue.id, fillCatalogue);
    var my_form = document.getElementById("myForm");
    my_form.reset()
    /* Toast */
    var toast = document.getElementById("snackbar6");
    /* Show Toast */
    toast.className = "show";
    setTimeout(() => {
      /* hide Toast after 2 seconds */
      toast.className = toast.className.replace("show", "");
      this.props.hide();
    }, 2000);
  }
  render() {
    const param = this.props.idCatalogue;
    if (param != null) {
      var getEditCatalogue = this.props.editCatalogue.find(catalogue => {
        return catalogue.id === param;
      });
      var forms1 = [
        {
          lableFor: "price",
          lableName: "Harga",
          inputAttr: {
            type: "text",
            placeholder: "Harga Barang",
            className: "form-control",
            name: "price",
            defaultValue: getEditCatalogue.price,
            onChange: this.handleChange,
            maxLength: "15"
          }
        }
      ];
      var forms2 = [
        {
          selectName: "Nama Barang",
          selectAttr: {
            className: "form-control select2",
            name: "name",
            defaultValue: getEditCatalogue.name
          },
          optionList: [
            {
              inputAttr: {
                value: "",
                disabled: true
              },
              name: "-- Pilih Barang --"
            },
            {
              inputAttr: {
                value: "handphone Nokia 3610"
              },
              name: "handphone Nokia 3610"
            },
            {
              inputAttr: {
                value: "laptop Asus Tuf Gaming"
              },
              name: "laptop Asus Tuf Gaming"
            },
            {
              inputAttr: {
                value: "monitor toshiba"
              },
              name: "Monitor toshiba"
            }
          ]
        },
        {
          selectName: "Vendor",
          selectAttr: {
            className: "form-control select2",
            name: "vendor",
            defaultValue: getEditCatalogue.vendor
          },
          optionList: [
            {
              inputAttr: {
                value: "",
                disabled: true
              },
              name: "-- Pilih Vendor --"
            },
            {
              inputAttr: {
                value: "king"
              },
              name: "king Computer"
            },
            {
              inputAttr: {
                value: "enter"
              },
              name: "Enter Komputer"
            }
          ]
        }
      ];
      var forms4 = [
        {
          selectName: "Tipe Garansi",
          selectAttr: {
            className: "form-control select2",
            name: "tipe_garansi",
            defaultValue: getEditCatalogue.tipe_garansi,
            required: true
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
      var forms3 = [
        {
          lableFor: "waktu_garansi",
          lableName: "Waktu Garansi",
          inputAttr: {
            type: "number",
            placeholder: "Jangka Waktu Garansi (Bulan)",
            className: "form-control",
            name: "waktu_garansi",
            defaultValue: getEditCatalogue.waktu_garansi
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
          <Modal title="Ubah Data Katalog" save={save} close={close}>
            <div className="col-md-12">
              <Select formProp={forms2} />
              <FreeText formProp={forms1} />
              <Select formProp={forms4} />
              <FreeText formProp={forms3} />
            </div>
            <div id="snackbar6">Berhasil...</div>
          </Modal>
        </form>
      );
    } else { return false }
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submitCatalogue: (index, catalogueData) =>
      dispatch(dispatchEditCatalogue(index, catalogueData))
  };
};
const mapStateToProps = state => {
  return {
    editCatalogue: state.catalogue.catalogueForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCatalogue);
