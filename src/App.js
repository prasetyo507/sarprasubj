import React, { Component } from "react";
import Header from "./components/Header.js";
import Menu from "./components/Menu.js";
import Footer from "./components/Footer.js";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;
