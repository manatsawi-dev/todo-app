import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormWrapper, Spacer } from "./styled-component";
import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

const FormLogin = (props) => {
  const { onSubmit } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerOnSubmit = () => {
    if (!email || !password) {
      alert("Pleas enter email and password");
      return;
    }
    onSubmit(email, password);
  };

  return (
    <Form onSubmit={handlerOnSubmit}>
      <FormWrapper>
        <Input
          borderRadiusAll
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <Spacer />
        <Input
          borderRadiusAll
          name="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(value) => setPassword(value)}
        />
        <Spacer />
        <Button type="submit" borderRadiusAll>
          Login
        </Button>
      </FormWrapper>
    </Form>
  );
};

FormLogin.propTypes = {};

FormLogin.propTypes = {
  onSubmit: PropTypes.func,
};

FormLogin.defaultProps = {
  onSubmit: () => {},
};

export default FormLogin;