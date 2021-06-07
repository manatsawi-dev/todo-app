import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Wrapper, Spacer } from "./views/styled-component";
import FormLogin from "./views/login-form";
import Header from "../../components/header";
import Button from "../../components/button/button";
import * as navigationServices from "../../utils/navigation-services";
import * as ROUTES from "../../routes/routes-name";

const LoginScreen = () => {
  const { authLogin } = useAuth();

  const onSubmit = async (email, password) => {
    const reqBody = {
      email,
      password,
    };
    await authLogin(reqBody);
  };

  const onClickRegister = () => {
    navigationServices.navigateTo({ pathname: ROUTES.ROUTE_REGISTER });
  };

  return (
    <Wrapper>
      <Header>Login</Header>
      <Spacer />
      <FormLogin onSubmit={onSubmit} />
      <Spacer />
      <Button variant="info" onClick={onClickRegister}>
        Register
      </Button>
    </Wrapper>
  );
};

LoginScreen.propTypes = {};

export default LoginScreen;
