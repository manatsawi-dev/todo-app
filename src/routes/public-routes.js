import React from "react";
import { Route, Switch } from "react-router-dom";
import TodoScreen from "../screens/todo";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";

import * as ROUTES from "./routes-name";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.ROUTE_HOME} component={TodoScreen} />
      <Route exact path={ROUTES.ROUTE_LOGIN} component={LoginScreen} />
      <Route exact path={ROUTES.ROUTE_REGISTER} component={RegisterScreen} />
    </Switch>
  );
};

export default PublicRoutes;
