import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import NewSubmission from '../pages/submission/NewSubmission';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/submission" component={NewSubmission} />
      </Switch>
    );
  }
}

export default Routes;
