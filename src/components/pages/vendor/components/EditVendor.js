import React, { Component } from "react";
import Section from "../../../common/Section";
import Master from "../../Master";
import { FreeText, Select, TextArea } from "../../../common/FormGroup";
import { Link } from "react-router-dom";
import { dispatchEditVendor } from "../store/actions/vendorAction";
import { connect } from "react-redux";

class EditVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
      alert(e.target.placeholder + " harus berupa angka!");
    }
  }
  async handleSubmit(event) {
    event.preventDefault();
    let fillVendor = {
      id: 1,
      nama: event.target.name.value,
      negara: event.target.country.value,
      provinsi: event.target.province.value,
      kota: event.target.city.value,
      kodepos: event.target.zip.value,
      alamat: event.target.address.value,
      kontak: event.target.contact.value,
      telp: event.target.phone.value,
      fax: event.target.fax.value,
      web: event.target.website.value,
      email: event.target.email.value,
      catatan: event.target.note.value
    }
    await this.props.submitVendor(fillVendor.id, fillVendor);
    var btnSubmit = document.getElementById("save");
    btnSubmit.disabled = "disabled";

    /* Toast */
    var toast = document.getElementById("snackbar");
    /* Show Toast */
    toast.className = "show";
    setTimeout(() => {
      /* hide Toast after 2 seconds */
      toast.className = toast.className.replace("show", "");
      this.props.history.push("/vendor");
    }, 2000);
  }
  render() {

    const param = this.props.match.params.refnumber;
    var getEditVendor = this.props.editVendor.find(vendor => {
      return String(vendor.id) === param;
    });

    const forms1 = [
      {
        lableFor: "name",
        lableName: "Nama",
        inputAttr: {
          type: "text",
          placeholder: "Nama Vendor",
          className: "form-control",
          name: "name",
          defaultValue: getEditVendor.nama,
          required: true
        }
      }
    ];

    const forms2 = [
      {
        selectName: "Negara",
        selectAttr: {
          className: "form-control select2",
          name: "country",
          defaultValue: getEditVendor.negara,
          required: true
        },
        optionList: [
          {
            inputAttr: {
              value: "",
              disabled: true
            },
            name: "-- Pilih Negara --"
          },
          {
            inputAttr: {
              value: "indonesia"
            },
            name: "Indonesia"
          },
          {
            inputAttr: {
              value: "malaysia"
            },
            name: "Malaysia"
          },
          {
            inputAttr: {
              value: "singapore"
            },
            name: "Singapore"
          }
        ]
      },
      {
        selectName: "Provinsi",
        selectAttr: {
          className: "form-control select2",
          name: "province",
          defaultValue: getEditVendor.provinsi,
          required: true
        },
        optionList: [
          {
            inputAttr: {
              value: "",
              disabled: true
            },
            name: "-- Pilih Provinsi --"
          },
          {
            inputAttr: {
              value: "jabar"
            },
            name: "Jawa Barat"
          },
          {
            inputAttr: {
              value: "dki"
            },
            name: "DKI Jakarta"
          },
          {
            inputAttr: {
              value: "sumbar"
            },
            name: "Sumatera Barat"
          }
        ]
      },
      {
        selectName: "Kota",
        selectAttr: {
          className: "form-control select2",
          name: "city",
          defaultValue: getEditVendor.kota,
          required: true
        },
        optionList: [
          {
            inputAttr: {
              value: "",
              disabled: true
            },
            name: "-- Pilih Kota --"
          },
          {
            inputAttr: {
              value: "bekasikota"
            },
            name: "Bekasi Kota"
          },
          {
            inputAttr: {
              value: "jakarta selatan"
            },
            name: "Jakarta Selatan"
          },
          {
            inputAttr: {
              value: "medan"
            },
            name: "Medan"
          }
        ]
      }
    ];
    const forms3 = [

      {
        lableFor: "zip",
        lableName: "Kode Pos",
        inputAttr: {
          type: "text",
          placeholder: "Kode Pos Vendor",
          className: "form-control",
          name: "zip",
          maxLength: "10",
          defaultValue: getEditVendor.kodepos,
          required: true
        }
      }
    ];
    const forms6 = [
      {
        lableFor: "address",
        lableName: "Alamat",
        inputAttr: {
          placeholder: "Alamat Vendor",
          className: "form-control",
          name: "address",
          defaultValue: getEditVendor.alamat,
          required: true
        }
      }
    ];
    const forms5 = [
      {
        lableFor: "contact",
        lableName: "Kontak",
        inputAttr: {
          type: "text",
          placeholder: "Kontak Vendor",
          className: "form-control",
          name: "contact",
          defaultValue: getEditVendor.kontak,
          required: true
        }
      },
      {
        lableFor: "phone",
        lableName: "No. Telp",
        inputAttr: {
          type: "text",
          placeholder: "Nomor Telepon Vendor",
          className: "form-control",
          name: "phone",
          onChange: this.handleChange,
          maxLength: "18",
          defaultValue: getEditVendor.telp,
          required: true
        }
      },
      {
        lableFor: "fax",
        lableName: "Fax",
        inputAttr: {
          type: "text",
          placeholder: "Fax Vendor",
          className: "form-control",
          name: "fax",
          onChange: this.handleChange,
          maxLength: "18",
          defaultValue: getEditVendor.fax
        }
      },
      {
        lableFor: "website",
        lableName: "Website",
        inputAttr: {
          type: "url",
          placeholder: "Website Vendor",
          className: "form-control",
          name: "website",
          defaultValue: getEditVendor.web
        }
      },
      {
        lableFor: "email",
        lableName: "Email",
        inputAttr: {
          type: "email",
          placeholder: "Email Vendor",
          className: "form-control",
          name: "email",
          defaultValue: getEditVendor.email,
          required: true
        }
      }
    ];

    const forms7 = [
      {
        lableFor: "note",
        lableName: "Catatan",
        inputAttr: {
          placeholder: "Keterangan Tambahan",
          className: "form-control",
          name: "note",
          defaultValue: getEditVendor.catatan
        }
      }
    ];
    return (
      <Master>
        <Section pageName={"Vendor"} pageSubject={"Ubah vendor"}>
          <form onSubmit={this.handleSubmit}>
            <div className="col-md-6">
              <FreeText formProp={forms1} />
              <Select formProp={forms2} />
              <FreeText formProp={forms3} />
              <TextArea formProp={forms6} />
            </div>
            <div className="col-md-6">
              <FreeText formProp={forms5} />
              <TextArea formProp={forms7} />
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-success pull-right" id="save">
                <i className='fa fa-edit'></i> Ubah
              </button>
              <Link to='/vendor' className='btn btn-warning'>
                <i className='fa fa-chevron-left'></i> Batalkan dan Kembali
					    </Link>
            </div>
          </form>
          <div id="snackbar">Berhasil...</div>
        </Section>
      </Master>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitVendor: (index, vendorData) =>
      dispatch(dispatchEditVendor(index, vendorData))
  };
};
const mapStateToProps = state => {
  return {
    editVendor: state.vendor.vendorForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditVendor);
