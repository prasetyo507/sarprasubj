import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import listSatuan from "../components/Satuan";


const Satuan = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path} exact component={listSatuan} />
        </Switch>
    );
};
export default Satuan;
