import React, { useState, useEffect } from "react";
import { useTodoNoAuth } from "../../hooks/useTodo";
import { Container, ContentWrapper } from "./views/styled-component";
import Header from "../../components/header";
import { FormAdd } from "./views/todo-form";
import TodoList from "./views/todo-list";

const TodoScreen = () => {
  const {
    todoState,
    dispatchAddTodoNoAuth,
    updateTodoNoAuth,
    deleteTodoNoAuth,
  } = useTodoNoAuth();
  const [editListState, setEditListState] = useState({});
  const [todoListState, setTodoListState] = useState(todoState);

  useEffect(() => {
    if (todoState) {
      setTodoListState(todoState);
    }
  }, [todoState]);

  const onEventAddTodo = (value) => {
    dispatchAddTodoNoAuth({
      item: value,
      currentData: todoListState,
    });
  };

  const onEventUpdateTodo = async (id, newValue) => {
    const updateData = await updateTodoNoAuth({
      id,
      item: newValue,
      currentData: todoListState,
    });
    if (!updateData) {
      return;
    }
    setTodoListState(updateData);
    if (!editListState[id]) {
      return;
    }
    deleteEditList(id);
  };

  const onEventDeleteTodo = async (id) => {
    const newData = await deleteTodoNoAuth({ id, currentData: todoListState });
    if (!newData) {
      return;
    }
    setTodoListState(newData);
    deleteEditList(id);
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
