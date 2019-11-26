import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/router/Routes';

import Header from "./components/common/Header";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Wrapper from "./components/common/Wrapper";
import Dashboard from "./components/pages/Dashboard";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Menu />
          <Wrapper>
            <Dashboard />
          </Wrapper>
          <Footer />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
