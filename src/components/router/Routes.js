import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import NewSubmission from "../pages/submission/NewSubmission";
import Vendor from "../pages/vendor/Vendor";
import AddVendor from "../pages/vendor/AddVendor";
import EditVendor from "../pages/vendor/EditVendor";
import NotFound from "../pages/404/404";
import ItemGroup from "../pages/itemgroup/ItemGroup";
import Category from "../pages/itemgroup/Category";
import Jenis from "../pages/itemgroup/Jenis";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/submission" component={NewSubmission} />
        <Route path="/vendor" component={Vendor} />
        <Route path="/addvendor" component={AddVendor} />
        <Route path="/editvendor" component={EditVendor} />
        <Route path="/group-items" component={ItemGroup} />
        <Route path="/category" component={Category} />
        <Route path="/jenis" component={Jenis} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
