import React, { Component } from "react";
import Header from "./components/Header.js";
import Menu from "./components/Menu.js";
import Footer from "./components/Footer.js";
import Wrapper from "./components/Wrapper";
import Datatable from "./components/pages/Datatable.js";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Wrapper />
        <Datatable />
        <Footer />
      </div>
    );
  }
}

export default App;
