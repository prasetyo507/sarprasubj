import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";

class Vendor extends Component {
  render() {
    return (
      <Master>
        <Section pageName={"Vendor"} pageSubject={"Kelola vendor"}>
          <h1>Hello, this is vendor!</h1>
        </Section>
      </Master>
    );
  }
}

export default Vendor;
