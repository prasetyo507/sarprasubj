import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ProcurementList from "../components/ProcurementList";
import ProcurementChecking from "../components/ProcurementChecking";

const Procurement = () => {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route path={path} exact component={ProcurementList} />
			<Route
				path={`${path}/:refnumber/seesubmission`}
				component={ProcurementChecking}
			/>
		</Switch>
	);
};

export default Procurement;
