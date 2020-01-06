import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import NewSubmission from "../pages/submission/container";
import Vendor from "../pages/vendor/container";
import NotFound from "../pages/404/404";
import Category from "../pages/itemgroup/Category";
import Jenis from "../pages/itemgroup/Jenis";
import Item from "../pages/items/container";

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route path='/' exact component={Dashboard} />
				<Route path='/submission' component={NewSubmission} />
				<Route path='/vendor' component={Vendor} />
				<Route path='/items' component={Item} />
				<Route path='/category' component={Category} />
				<Route path='/jenis' component={Jenis} />
				<Route component={NotFound} />
			</Switch>
		);
	}
}

export default Routes;
