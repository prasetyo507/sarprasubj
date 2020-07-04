import React, { Component } from "react";
import Section from "../../../common/Section";
import Master from "../../Master";
import { FreeText, Select, TextArea } from "../../../common/FormGroup";
import { connect } from "react-redux";
// import { dispatchVendor } from "../store/actions/vendorAction";
import { Link } from "react-router-dom";
import Services from "../../../services/Services";


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
    const props = this.props;
    let Data = {
      name: event.target.name.value,
      country: Number(event.target.country.value),
      province: Number(event.target.province.value),
      city: Number(event.target.city.value),
      zip_code: Number(event.target.zip.value),
      address: event.target.address.value,
      contact_name: event.target.contact.value,
      phone: event.target.phone.value,
      fax: event.target.fax.value,
      url: event.target.website.value,
      email: event.target.email.value,
      note: event.target.note.value
    }
    let cfg = {
      headers: { "user-token": props.token }
    }
    await Services.post("vendor", Data, cfg)
      .then(function (response) {
        var btnSubmit = document.getElementById("save");
        btnSubmit.disabled = "disabled";
        var toast = document.getElementById("snackbar");
        toast.className = "show";
        setTimeout(() => {
          toast.className = toast.className.replace("show", "");
          props.history.push("/vendor");
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
      })

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
              value: 1
            },
            name: "Indonesia"
          },
          {
            inputAttr: {
              value: 2
            },
            name: "Malaysia"
          },
          {
            inputAttr: {
              value: 3
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
              value: 1
            },
            name: "Jawa Barat"
          },
          {
            inputAttr: {
              value: 2
            },
            name: "DKI Jakarta"
          },
          {
            inputAttr: {
              value: 3
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
              value: 1
            },
            name: "Bekasi Kota"
          },
          {
            inputAttr: {
              value: 2
            },
            name: "Jakarta Selatan"
          },
          {
            inputAttr: {
              value: 3
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

// const mapDispatchToProps = dispatch => {
//   return {
//     submitVendor: vendorData =>
//       dispatch(dispatchVendor(vendorData))
//   };
// };
const mapStateToProps = state => {
  return {
    token: state.token.tokenKey
  };
};

export default connect(mapStateToProps, null)(AddVendor);