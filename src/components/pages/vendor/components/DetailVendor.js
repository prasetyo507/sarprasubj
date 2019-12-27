import React, { Component } from "react";
import Section from "../../../common/Section";
import Master from "../../Master";
import { FreeText, TextArea } from "../../../common/FormGroup";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class DetailVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const param = this.props.match.params.refnumber;
    var getDetailVendor = this.props.detailVendor.find(vendor => {
      return String(vendor.id) === param;
    });

    const forms1 = [
      {
        lableFor: "name",
        lableName: "Nama",
        inputAttr: {
          type: "text",
          className: "form-control",
          name: "name",
          defaultValue: getDetailVendor.nama,
          readOnly: true
        }
      },
      {
        lableFor: "Negara",
        lableName: "Negara",
        inputAttr: {
          type: "text",
          className: "form-control",
          name: "country",
          defaultValue: getDetailVendor.negara,
          readOnly: true
        }
      },
      {
        lableFor: "Provinsi",
        lableName: "Provinsi",
        inputAttr: {
          type: "text",
          className: "form-control",
          name: "province",
          defaultValue: getDetailVendor.provinsi,
          readOnly: true
        }
      },
      {
        lableFor: "Kota",
        lableName: "Kota",
        inputAttr: {
          type: "text",
          className: "form-control",
          name: "city",
          defaultValue: getDetailVendor.kota,
          readOnly: true
        }
      },
      {
        lableFor: "zip",
        lableName: "Kode Pos",
        inputAttr: {
          type: "text",
          placeholder: "Kode Pos Vendor",
          className: "form-control",
          name: "zip",
          maxLength: "10",
          defaultValue: getDetailVendor.kodepos,
          readOnly: true
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
          defaultValue: getDetailVendor.alamat,
          readOnly: true
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
          defaultValue: getDetailVendor.kontak,
          readOnly: true
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
          maxLength: "18",
          defaultValue: getDetailVendor.telp,
          readOnly: true
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
          maxLength: "18",
          defaultValue: getDetailVendor.fax,
          readOnly: true
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
          defaultValue: getDetailVendor.web,
          readOnly: true
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
          defaultValue: getDetailVendor.email,
          readOnly: true
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
          defaultValue: getDetailVendor.catatan,
          readOnly: true
        }
      }
    ];
    let backButton = (
      <>
        <Link to='/vendor' className='btn btn-warning'>
          <i className='fa fa-chevron-left'></i> Kembali
				</Link>
      </>
    );
    return (
      <Master>
        <Section pageName={"Vendor"} pageSubject={`Detail  ${getDetailVendor.nama}`}
          box_header={backButton}>
          <form>
            <div className="col-md-6">
              <FreeText formProp={forms1} />
              <TextArea formProp={forms6} />
            </div>
            <div className="col-md-6">
              <FreeText formProp={forms5} />
              <TextArea formProp={forms7} />
            </div>
          </form>
        </Section>
      </Master>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailVendor: state.vendor.vendorForm
  };
};

export default connect(mapStateToProps, null)(DetailVendor);
