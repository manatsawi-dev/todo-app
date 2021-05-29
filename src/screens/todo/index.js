import React, { useState, useEffect } from "react";
import { Container, ContentWrapper } from "./views/styled-component";
import Header from "../../components/header";
import { FormAdd } from "./views/todo-form";
import TodoList from "./views/todo-list";
import * as services from "../../services/todo";
import * as coreTodo from "../../utils/core-todo";

const TodoScreen = () => {
  const [editListState, setEditListState] = useState({});
  const [todoListState, setTodoListState] = useState();

  useEffect(() => {
    async function fetchTodoList() {
      try {
        const response = await services.fetchTodoList();
        setTodoListState(() => coreTodo.mapDataToState(response?.data));
      } catch (error) {
        alert("failed get todo list: " + error);
      }
    }
    fetchTodoList();
  }, []);

  const onEventAddTodo = async (value) => {
    if (!isValidateValue(value)) {
      alert("input invalid");
      return;
    }
    try {
      const reqBody = {
        title: value,
      };
      const response = await services.addTodoList(reqBody);
      const newData = coreTodo.addNewDataToState({
        oldData: todoListState,
        newData: response.data,
      });
      setTodoListState(newData);
    } catch (error) {
      alert("failed add todo: " + error);
    }
  };

  const onEventUpdateTodo = async (id, newValue) => {
    if (!isValidateValue(newValue)) {
      alert("input invalid");
      return;
    }
    try {
      const reqBody = {
        title: newValue,
      };
      const response = await services.updateTodoList({ id, reqBody });
      const updateState = coreTodo.updateNewDataToState({
        oldData: todoListState,
        newData: response.data,
      });
      setTodoListState(updateState);
      if (!editListState[id]) {
        return;
      }
      deleteEditList(id);
    } catch (error) {
      alert("failed update todo: " + error);
    }
  };

  const onEventDeleteTodo = async (id) => {
    try {
      await services.deleteTodoList(id);
      const newData = coreTodo.deleteDataFromState({
        data: todoListState,
        id,
      });
      setTodoListState(newData);
      deleteEditList(id);
    } catch (error) {
      alert("failed delete todo: " + error);
    }
  };

  const onEventEditTodo = (id) => {
    if (editListState[id]) {
      return;
    }
    let newEdit = { ...editListState };
    newEdit[id] = true;
    setEditListState(newEdit);
  };

  const deleteEditList = (id) => {
    let newEdit = { ...editListState };
    delete newEdit[id];
    setEditListState(newEdit);
  };

  const isValidateValue = (value) => {
    const validatePattern = /^[a-zA-Z ก-๛ 0-9]+$/;
    return validatePattern.test(value);
  };

  return (
    <Container>
      <ContentWrapper>
        <Header>What's the Plan for Today?</Header>
        <FormAdd onSubmit={onEventAddTodo} />
        <TodoList
          data={todoListState}
          editList={editListState}
          onClickDelete={onEventDeleteTodo}
          onClickEdit={onEventEditTodo}
          onClickUpdate={onEventUpdateTodo}
        />
      </ContentWrapper>
    </Container>
  );
};

TodoScreen.propTypes = {};

export default TodoScreen;
