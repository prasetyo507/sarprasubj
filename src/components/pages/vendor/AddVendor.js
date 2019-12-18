import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";
import { FreeText, Select, TextArea } from "../../common/FormGroup";

class AddVendor extends Component {
  constructor() {
    super();
    this.state = {};
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
          name: "name"
        }
      }
    ];

    const forms2 = [
      {
        selectName: "Negara",
        selectAttr: {
          className: "form-control",
          name: "country"
        },
        optionList: [
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
      }
    ];
    const forms3 = [
      {
        lableFor: "contact",
        lableName: "Kontak",
        inputAttr: {
          type: "text",
          placeholder: "Kontak Vendor",
          className: "form-control",
          name: "contact"
        }
      },
      {
        lableFor: "zip",
        lableName: "Kode Pos",
        inputAttr: {
          type: "text",
          placeholder: "Kode Pos Vendor",
          className: "form-control",
          name: "zip"
        }
      }
    ];
    const forms4 = [
      {
        selectName: "Kota",
        selectAttr: {
          className: "form-control",
          name: "city"
        },
        optionList: [
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
    const forms5 = [
      {
        lableFor: "phone",
        lableName: "No. Telp",
        inputAttr: {
          type: "text",
          placeholder: "Nomor Telepon Vendor",
          className: "form-control",
          name: "phone"
        }
      },
      {
        lableFor: "fax",
        lableName: "Fax",
        inputAttr: {
          type: "text",
          placeholder: "Fax Vendor",
          className: "form-control",
          name: "fax"
        }
      },
      {
        lableFor: "website",
        lableName: "Website",
        inputAttr: {
          type: "url",
          placeholder: "Website Vendor",
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
          name: "email"
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
          name: "address"
        }
      },
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
          <form>
            <div className="col-md-6">
              <FreeText formProp={forms1} />
              <Select formProp={forms2} />
              <FreeText formProp={forms3} />
              <TextArea formProp={forms6} />
            </div>
            <div className="col-md-6">
              <Select formProp={forms4} />
              <FreeText formProp={forms5} />
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary pull-right">
                Simpan
              </button>
            </div>
          </form>
        </Section>
      </Master>
    );
  }
}

export default AddVendor;
