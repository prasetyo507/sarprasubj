import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";
import Datatable from "../../table/Datatable";
import { Link } from "react-router-dom";

class Vendor extends Component {
  constructor() {
    super();
    this.state = {
      tableHead: [
        {
          column0: "Nama Supplier",
          column1: "Email",
          column2: "Alamat",
          column3: "Aksi"
        }
      ],
      tableContent: [
        {
          name: "King",
          email: "bla@yahoo.com",
          note: "Matraman",
          action: (
            <button className="btn btn-success">
              <i className="fa fa-plus"></i>
            </button>
          )
        },
        {
          name: "Enter",
          email: "nyo@gmail.com",
          note: "Mangga Dua",
          action: (
            <button className="btn btn-success">
              <i className="fa fa-plus"></i>
            </button>
          )
        }
      ]
    };
  }
  render() {
    const button = (
      <Link to="/addvendor">
        <button type="button" class="btn btn-success">
          <i class="fa fa-plus" aria-hidden="true"></i> Tambah
        </button>
      </Link>
    );
    return (
      <Master>
        <Section
          pageName={"Vendor"}
          pageSubject={"Kelola vendor"}
          box_header={button}
        >
          <Datatable
            headContent={this.state.tableHead}
            content={this.state.tableContent}
          />
        </Section>
      </Master>
    );
  }
}

export default Vendor;
