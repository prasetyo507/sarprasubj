import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListVendor from "../components/ListVendor";
import AddVendor from "../components/AddVendor";
import EditVendor from "../components/EditVendor";
import DetailVendor from "../components/DetailVendor";

const Vendor = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path} exact component={ListVendor} />
            <Route path={`${path}/new`} component={AddVendor} />
            <Route path={`${path}/:refnumber/edit`} component={EditVendor} />
            <Route path={`${path}/:refnumber/detail`} component={DetailVendor} />
        </Switch>
    );
};

export default Vendor;
