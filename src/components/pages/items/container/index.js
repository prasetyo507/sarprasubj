import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Items from "../components/Items";


const Item = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path} exact component={Items} />
        </Switch>
    );
};
export default Item;
