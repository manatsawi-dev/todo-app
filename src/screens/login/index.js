import React from "react";
import { Wrapper } from "./views/styled-component";
import FormLogin from "./views/login-form";

const LoginScreen = () => {
  const onSubmit = (email, password) => {
    console.log(email, password);
  };

  return (
    <Wrapper>
      <FormLogin onSubmit={onSubmit} />
    </Wrapper>
  );
};

LoginScreen.propTypes = {};

export default LoginScreen;
