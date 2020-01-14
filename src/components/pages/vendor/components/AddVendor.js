import React, { Component } from "react";
import Section from "../../../common/Section";
import Master from "../../Master";
import { FreeText, Select, TextArea } from "../../../common/FormGroup";
import { connect } from "react-redux";
import { dispatchVendor } from "../store/actions/vendorAction";
import { Link } from "react-router-dom";


class AddVendor extends Component {
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
    await this.props.submitVendor(fillVendor);
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
    }, 1000);

  }

  render() {
    const forms1 = [
      {
        lableFor: "name",
        lableName: "Nama",
        inputAttr: {
          type: "text",
          placeholder: "Nama Vendor",
          className: "form-control",
          name: "name",
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
          required: true,
          defaultValue: ""
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
          required: true,
          defaultValue: ""
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
          required: true,
          defaultValue: ""
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
          maxLength: "18"
        }
      },
      {
        lableFor: "website",
        lableName: "Website",
        inputAttr: {
          type: "url",
          placeholder: "Website Vendor (http://)",
          className: "form-control",
          name: "website"
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
          name: "note"
        }
      }
    ];
    return (
      <Master>
        <Section pageName={"Vendor"} pageSubject={"Tambah vendor baru"}>
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
                <i className='fa fa-save'></i> Simpan
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
    submitVendor: vendorData =>
      dispatch(dispatchVendor(vendorData))
  };
};

export default connect(null, mapDispatchToProps)(AddVendor);