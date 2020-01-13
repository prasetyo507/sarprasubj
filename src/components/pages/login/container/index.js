import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Login from "../components/Login";


const Auth = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path} exact component={Login} />
        </Switch>
    );
};
export default Auth;
