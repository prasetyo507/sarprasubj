import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";
import Datatable from "../../table/Datatable";
import { Link } from "react-router-dom";
import { FreeText } from "../../common/FormGroup";
import "./Category.css";
import EditJenis from "./EditJenis";
class Jenis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idTable: "example1",
      tableHead: [
        {
          column0: "Kategori",
          column3: "Aksi"
        }
      ],
      tableContent: [
        {
          name: "Pulpen",
          action: (
            <>
              <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target="#edit_jenis"
              >
                <i className="fa fa-edit" aria-hidden="true"></i>
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                <i className="fa fa-close" aria-hidden="true"></i>
              </button>
            </>
          )
        },
        {
          name: "Penggaris",
          action: (
            <>
              <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target="#edit_jenis"
              >
                <i className="fa fa-edit" aria-hidden="true"></i>
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                <i className="fa fa-close" aria-hidden="true"></i>
              </button>
            </>
          )
        }
      ]
    };
  }
  render() {
    const forms1 = [
      {
        lableFor: "name",
        lableName: "Nama",
        inputAttr: {
          type: "text",
          placeholder: "Nama Jenis Barang",
          className: "form-control",
          name: "name"
        }
      }
    ];
    return (
      <Master>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div className="padding_right">
              <Section
                pageName={"Jenis Barang"}
                pageSubject={"Kategori Alat Tulis Kantor"}
                box_header={"Buat Jenis Barang"}
                class_section={"padding_right"}
              >
                <FreeText formProp={forms1} />
                <div className="pull-right">
                  <Link to="/category">
                    <button type="button" className="btn btn-warning">
                      Kembali
                    </button>
                  </Link>
                  &nbsp;
                  <button type="button" className="btn btn-success">
                    Tambah
                  </button>
                </div>
              </Section>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <Section
              box_header={"Daftar Jenis Barang"}
              class_section="padding_left"
            >
              <Datatable
                headContent={this.state.tableHead}
                content={this.state.tableContent}
                idTable={this.state.idTable}
              />
              <div className="modal fade" id="edit_jenis">
                <EditJenis />
              </div>
            </Section>
          </div>
        </div>
      </Master>
    );
  }
}

export default Jenis;
