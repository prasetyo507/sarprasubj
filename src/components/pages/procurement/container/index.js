import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ProcurementList from "../components/ProcurementList";
import MakeProcurement from "../components/MakeProcurement";

const Procurement = () => {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route path={path} exact component={ProcurementList} />
			<Route
				path={`${path}/:refnumber/submission/create_procurement`}
				component={MakeProcurement}
			/>
			<Route
				path={`${path}/:refnumber/procurement`}
				component={MakeProcurement}
			/>
		</Switch>
	);
};

export default Procurement;
