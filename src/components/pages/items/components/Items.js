import React, { Component } from "react";
import Section from "../../../common/Section";
import Master from "../../Master";
import Tabs from "../../../common/Tabs";
import Catalogue from "./catalogue/Catalogue";
import Barang from "./barang/Barang";

class Items extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const tabinput = [
      {
        name: "tab_barang",
        title: "Barang",
        content: <Barang />
      },
      {
        name: "tab_katalog",
        title: "Katalog",
        content: <Catalogue />
      }
    ];
    return (
      <Master>
        <Section pageName={"Barang"} pageSubject={"Daftar barang"}>
          <Tabs tabinput={tabinput} />
        </Section>
      </Master>
    );
  }
}

export default Items;
