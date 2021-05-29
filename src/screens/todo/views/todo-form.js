import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormAddWrapper } from "./styled-component";
import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

const FormAdd = (props) => {
  const { onSubmit } = props;
  const [newTodoState, setNewTodoState] = useState("");

  const handlerOnSubmit = (value) => {
    onSubmit(value?.todo || "");
    setNewTodoState("");
  };

  return (
    <Form onSubmit={handlerOnSubmit}>
      <FormAddWrapper>
        <Input
          name="todo"
          placeholder="Enter some plan"
          value={newTodoState}
          onChange={(value) => setNewTodoState(value)}
        />
        <Button type="submit">Add</Button>
      </FormAddWrapper>
    </Form>
  );
};

FormAdd.propTypes = {
  onSubmit: PropTypes.func,
};

FormAdd.defaultProps = {
  onSubmit: () => {},
};

export default FormAdd;
