import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";
import FormGroup from "../../elements/FormGroup";

class AddVendor extends Component {
  constructor() {
    super();
    this.state = {
      form: [
        {
          label: "Nama",
          type: "text",
          className: "form-control",
          placeholder: "input nama",
          id: "name",
          readonly: true
        },
        {
          label: "Umur",
          type: "date",
          placeholder: "input umur",
          id: "umur",
          readonly: true
        },
        {
          label: "pria",
          type: "checkbox",
          id: "email"
        },
        {
          label: "pilihan",
          type: "select",
          id: "id_select"
        }
      ],
      selectbox: [
        { opt: "satu", selected: false },
        { opt: "dua", selected: false },
        { opt: "tiga", selected: true }
      ]
    };
  }
  render() {
    return (
      <Master>
        <Section pageName={"Vendor"} pageSubject={"Tambah vendor baru"}>
          <form>
            <FormGroup
              form={this.state.form}
              selectbox={this.state.selectbox}
            />
          </form>
        </Section>
      </Master>
    );
  }
}

export default AddVendor;
