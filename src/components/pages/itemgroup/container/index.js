import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Category from "../components/category/Category";
import Jenis from "../components/jenis/Jenis";


const Itemgroup = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path} exact component={Category} />
            <Route path={`${path}/:refnumber/jenis`} component={Jenis} />
        </Switch>
    );
};
export default Itemgroup;
