import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Wrapper, Spacer } from "./views/styled-component";
import FormRegister from "./views/register-form";
import Header from "../../components/header";
import Button from "../../components/button/button";
import * as navigationServices from "../../utils/navigation-services";
import * as ROUTES from "../../routes/routes-name";

const RegisterScreen = () => {
  const { authRegister } = useAuth();

  const onSubmit = async (name, email, password) => {
    const reqBody = {
      name,
      email,
      password,
    };
    await authRegister(reqBody);
  };

  const onClickLogin = () => {
    navigationServices.navigateTo({ pathname: ROUTES.ROUTE_LOGIN });
  };

  return (
    <Wrapper>
      <Header>Register</Header>
      <Spacer />
      <FormRegister onSubmit={onSubmit} />
      <Spacer />
      <Button variant="info" onClick={onClickLogin}>
        Login
      </Button>
    </Wrapper>
  );
};

RegisterScreen.propTypes = {};

export default RegisterScreen;
