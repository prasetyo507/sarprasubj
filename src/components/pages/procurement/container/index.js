import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ProcurementList from "../components/ProcurementList";
import Procurements from "../components/ProcurementDetail";
import ProcurementsFinal from "../components/ProcurementRektor";

const Procurement = () => {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route path={path} exact component={ProcurementList} />
			<Route
				path={`${path}/:refnumber/procurement`}
				component={Procurements}
			/>
			<Route
				path={`${path}/:refnumber/Procurementsfinal`}
				component={ProcurementsFinal}
			/>
		</Switch>
	);
};

export default Procurement;
