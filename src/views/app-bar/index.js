import React from "react";
import { useLocation } from "react-router-dom";
import { NavContainer, Button } from "./styled-component";
import { useAuth } from "../../hooks/useAuth";
import * as navigationServices from "../../utils/navigation-services";
import * as ROUTES from "../../routes/routes-name";

const AppBar = () => {
  const location = useLocation();
  const { isCheckedAuth, token, authLogout } = useAuth();
  const labelRight = isCheckedAuth && !token ? "Login" : "Logout";

  const onClicked = async () => {
    if (isCheckedAuth && !token) {
      navigationServices.navigateTo({ pathname: ROUTES.ROUTE_LOGIN });
      return;
    }
    authLogout();
  };

  const onClickedHome = () => {
    navigationServices.navigateTo({ pathname: ROUTES.ROUTE_HOME });
  };

  const checkCorrectLoginOrRegisterPath = (path) => {
    switch (path) {
      case ROUTES.ROUTE_LOGIN:
      case ROUTES.ROUTE_REGISTER:
        return true;
      default:
        return false;
    }
  };

  return (
    <NavContainer>
      <Button onClick={onClickedHome}>TodoList</Button>
      {!checkCorrectLoginOrRegisterPath(location.pathname) && (
        <>
          {isCheckedAuth && <Button onClick={onClicked}>{labelRight}</Button>}
        </>
      )}
    </NavContainer>
  );
};

AppBar.propTypes = {};

export default AppBar;
