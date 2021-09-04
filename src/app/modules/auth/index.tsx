import {Route, Switch, useRouteMatch} from "react-router-dom";
import {Login, Register} from "./pages";
import React from "react";

export default function Auth() {
    const {url} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${url}/login`} component={Login}/>
            <Route path={`${url}/register`} component={Register}/>
        </Switch>
    );
}
