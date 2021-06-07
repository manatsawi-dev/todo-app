import React from "react";
import { Wrapper, Spacer } from "./views/styled-component";
import FormLogin from "./views/login-form";
import Header from "../../components/header";
import { useAuth } from "../../hooks/useAuth";

const LoginScreen = () => {
  const { authLogin } = useAuth();

  const onSubmit = async (email, password) => {
    const reqBody = {
      email,
      password,
    };
    await authLogin(reqBody);
  };

  return (
    <Wrapper>
      <Header>Login</Header>
      <Spacer />
      <FormLogin onSubmit={onSubmit} />
    </Wrapper>
  );
};

LoginScreen.propTypes = {};

export default LoginScreen;
