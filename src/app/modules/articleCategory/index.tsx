import {Route, Switch, useRouteMatch} from "react-router-dom";
import {List} from "./pages";
import React from "react";

export default function ArticleCategory() {
    const {url} = useRouteMatch();
    console.log('url',url);
    return (
        <Switch>
            <Route path={`${url}`} component={List}/>
    {/*<Route path={`${url}/register`} component={Register}/>*/}
    </Switch>
);
}
