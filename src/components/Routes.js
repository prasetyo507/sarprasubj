import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import TablesPage from "./pages/TablesPage";
import MapsPage from "./pages/MapsPage";
import NotFoundPage from "./pages/NotFoundPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/pembelian" component={ProfilePage} />
        <Route path="/pendataan" component={TablesPage} />
        <Route path="/perawatan" component={MapsPage} />
        <Route path="/laporan" component={DashboardPage} />
        <Route path="/404" component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
