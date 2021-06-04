import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormAddWrapper, TodoEditInput } from "./styled-component";
import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

export const FormAdd = (props) => {
  const { onSubmit } = props;
  const [newTodoState, setNewTodoState] = useState("");

  const handlerOnSubmit = () => {
    onSubmit(newTodoState);
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

export const FormEdit = React.forwardRef((props, ref) => {
  const { onSubmit, defaultValue } = props;
  const [updateTodoState, setUpdateTodoState] = useState(defaultValue);

  const handlerOnSubmit = () => {
    onSubmit(updateTodoState);
    setUpdateTodoState("");
  };

  return (
    <Form onSubmit={handlerOnSubmit} fluid>
      <TodoEditInput
        ref={ref}
        name="edit-todo"
        placeholder="Enter some plan"
        value={updateTodoState}
        onChange={(e) => setUpdateTodoState(e.target.value)}
      />
    </Form>
  );
});

FormEdit.propTypes = {
  onSubmit: PropTypes.func,
  defaultValue: PropTypes.string,
};

FormEdit.defaultProps = {
  onSubmit: () => {},
  defaultValue: "",
};
