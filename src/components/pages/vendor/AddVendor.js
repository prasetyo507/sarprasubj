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
          label: "wanita",
          type: "checkbox",
          id: "email"
        }
      ]
    };
  }
  render() {
    return (
      <Master>
        <Section pageName={"Vendor"} pageSubject={"Tambah vendor baru"}>
          <form>
            <FormGroup label={this.state.form} />
          </form>
        </Section>
      </Master>
    );
  }
}

export default AddVendor;
