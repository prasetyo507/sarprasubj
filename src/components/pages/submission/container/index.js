import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import SubmissionList from "../components/SubmissionList";
import NewSubmission from "../components/NewSubmission";
import SubmissionDetail from "../components/SubmissionDetail";
import ProcurementChecking from "../../procurement/components/ProcurementChecking";

const Submission = () => {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route path={path} exact component={SubmissionList} />
			<Route path={`${path}/new`} component={NewSubmission} />
			<Route path={`${path}/:refnumber/detail`} component={SubmissionDetail} />
			<Route
				path={`${path}/:refnumber/seesubmission`}
				component={ProcurementChecking}
			/>
		</Switch>
	);
};

export default Submission;
