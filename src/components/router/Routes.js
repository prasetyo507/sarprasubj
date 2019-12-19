import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Submission from "../pages/submission/container";
import Procurement from "../pages/procurement/container";
import Vendor from "../pages/vendor/Vendor";
import AddVendor from "../pages/vendor/AddVendor";
import EditVendor from "../pages/vendor/EditVendor";
import Items from "../pages/barang/Items";
import AddBarang from "../pages/barang/AddBarang";
import EditBarang from "../pages/barang/EditBarang";
import NotFound from "../pages/404/404";
import ItemGroup from "../pages/itemgroup/ItemGroup";
import Category from "../pages/itemgroup/Category";
import Jenis from "../pages/itemgroup/Jenis";

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route path='/' exact component={Dashboard} />
				<Route path='/submission' component={Submission} />
				<Route path='/procurement' component={Procurement} />
				<Route path='/vendor' component={Vendor} />
				<Route path='/addvendor' component={AddVendor} />
				<Route path='/editvendor' component={EditVendor} />
				<Route path='/items' component={Items} />
				<Route path='/additem' component={AddBarang} />
				<Route path='/edititem' component={EditBarang} />
				<Route path='/group-items' component={ItemGroup} />
				<Route path='/category' component={Category} />
				<Route path='/jenis' component={Jenis} />
				<Route component={NotFound} />
			</Switch>
		);
	}
}

export default Routes;
