import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormWrapper, Spacer } from "./styled-component";
import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

const FormRegister = (props) => {
  const { onSubmit } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handlerOnSubmit = () => {
    if (!email || !password || !name) {
      alert("Pleas enter name, email and password");
      return;
    }
    onSubmit(name, email, password);
  };

  return (
    <Form onSubmit={handlerOnSubmit}>
      <FormWrapper>
        <Input
          borderRadiusAll
          name="name"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(value) => setName(value)}
        />
        <Spacer />
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
          Register
        </Button>
      </FormWrapper>
    </Form>
  );
};

FormRegister.propTypes = {
  onSubmit: PropTypes.func,
};

FormRegister.defaultProps = {
  onSubmit: () => {},
};

export default FormRegister;
