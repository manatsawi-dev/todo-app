import React from "react";
import { useLocation } from "react-router-dom";
import { NavContainer, Button } from "./styled-component";
import { useAuth } from "../../hooks/useAuth";
import * as navigationServices from "../../utils/navigation-services";
import * as ROUTES from "../../routes/routes-name";

const AppBar = () => {
  const location = useLocation();
  const { isCheckedAuth, authState, token, dispatchAuthLogout } = useAuth();
  const labelRight = isCheckedAuth && !authState && !token ? "Login" : "Logout";

  console.log(authState, token);

  const onClicked = async () => {
    const isLoggedOut = isCheckedAuth && !authState && !token;
    if (isLoggedOut) {
      navigationServices.navigateTo({ pathname: ROUTES.ROUTE_LOGIN });
      return;
    }
    dispatchAuthLogout();
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
