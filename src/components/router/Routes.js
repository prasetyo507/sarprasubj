import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import NewSubmission from "../pages/submission/NewSubmission";
import Vendor from "../pages/vendor/Vendor";
import NotFound from "../pages/404/404";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/submission" component={NewSubmission} />
        <Route path="/vendor" component={Vendor} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
