import React, { Component } from "react";
import Section from "../common/Section";
import Datatable from "../table/Datatable";

class Home extends Component {
  render() {
    return (
      <Section pageName={"Dashboard"} pageSubject={"Control panel"}>
        <Datatable />
      </Section>
    );
  }
}

export default Home;
