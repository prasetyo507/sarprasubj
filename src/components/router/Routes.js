import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Submission from "../pages/submission/container";
import Vendor from "../pages/vendor/Vendor";
import AddVendor from "../pages/vendor/AddVendor";
import EditVendor from "../pages/vendor/EditVendor";
import NotFound from "../pages/404/404";

const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact component={Dashboard} />
			<Route path='/submission' component={Submission} />
			<Route path='/vendor' component={Vendor} />
			<Route path='/addvendor' component={AddVendor} />
			<Route path='/editvendor' component={EditVendor} />
			<Route component={NotFound} />
		</Switch>
	);
};

export default Routes;
