import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";
import Datatable from "../../table/Datatable";
import { Link } from "react-router-dom";
import { FreeText } from "../../common/FormGroup";
import "./Category.css";
import EditCategory from "./EditCategory";
class Category extends Component {
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
          name: "Alat Tulis Kantor",
          action: (
            <>
              <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target="#edit_category"
              >
                <i className="fa fa-edit" aria-hidden="true"></i>
              </button>
              &nbsp;
              <Link to="/jenis">
                <button className="btn btn-success">
                  <i className="fa fa-eye"></i>
                </button>
              </Link>
              &nbsp;
              <button type="button" className="btn btn-danger">
                <i className="fa fa-close" aria-hidden="true"></i>
              </button>
            </>
          )
        },
        {
          name: "Furniture",
          action: (
            <>
              <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target="#edit_category"
              >
                <i className="fa fa-edit" aria-hidden="true"></i>
              </button>
              &nbsp;
              <Link to="/jenis">
                <button className="btn btn-success">
                  <i className="fa fa-eye"></i>
                </button>
              </Link>
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
          placeholder: "Nama Kategori Barang",
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
                pageName={"Kategori Barang"}
                pageSubject={"Grup Habis Pakai"}
                box_header={"Buat Kategori Barang"}
                class_section={"padding_right"}
              >
                <FreeText formProp={forms1} />
                <div className="pull-right">
                  <Link to="/group-items">
                    <button type="button" className="btn btn-warning">
                      Kembali
                    </button>
                  </Link>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#add_grup"
                  >
                    Tambah
                  </button>
                </div>
              </Section>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <Section
              box_header={"Daftar Kategori Barang"}
              class_section="padding_left"
            >
              <Datatable
                headContent={this.state.tableHead}
                content={this.state.tableContent}
                idTable={this.state.idTable}
              />
              <div className="modal fade" id="edit_category">
                <EditCategory />
              </div>
            </Section>
          </div>
        </div>
      </Master>
    );
  }
}

export default Category;
