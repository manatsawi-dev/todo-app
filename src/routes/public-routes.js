import React from "react";
import { Route, Switch } from "react-router-dom";
import TodoScreen from "../screens/todo";
import * as ROUTES from "./routes-name";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.ROUTE_MAIN} component={TodoScreen} />
    </Switch>
  );
};

export default PublicRoutes;
