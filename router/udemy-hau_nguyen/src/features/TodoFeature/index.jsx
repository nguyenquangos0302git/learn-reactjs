import React, { useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import PageDetails from "./pages/PageDetails";

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <p>Todo Feature</p>
      <Switch>
        <Route path={`${match.path}/listpage`} component={ListPage}></Route>
        <Route path={`${match.path}/:todoid`} component={PageDetails}></Route>
      </Switch>
    </div>
  );
}

export default TodoFeature;
