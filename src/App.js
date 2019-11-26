import React, { Component } from "react";
import Header from "./components/Header.js";
import Menu from "./components/Menu.js";
import Footer from "./components/Footer.js";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Wrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
