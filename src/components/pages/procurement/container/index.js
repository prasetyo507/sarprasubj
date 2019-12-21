import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ProcurementList from "../components/ProcurementList";
import ProcurementChecking from "../components/ProcurementChecking";
import MakeProcurement from "../components/MakeProcurement";

const Procurement = () => {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route path={path} exact component={ProcurementList} />
			<Route
				path={`${path}/:refnumber/seesubmission`}
				component={ProcurementChecking}
			/>
			<Route
				path={`${path}/:refnumber/submission/create_procurement`}
				component={MakeProcurement}
			/>
		</Switch>
	);
};

export default Procurement;
