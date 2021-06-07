import React from "react";
import { NavContainer, AppTitle, Button } from "./styled-component";
import { useAuth } from "../../hooks/useAuth";

const AppBar = () => {
  const { authLogout } = useAuth();

  return (
    <NavContainer>
      <AppTitle>TodoList</AppTitle>
      <Button onClick={() => authLogout()}>Logout</Button>
    </NavContainer>
  );
};

AppBar.propTypes = {};

export default AppBar;
