import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/router/Routes";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
