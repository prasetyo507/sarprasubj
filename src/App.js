import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/router/Routes";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
