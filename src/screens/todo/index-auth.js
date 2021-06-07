import React, { useState, useEffect } from "react";
import { useTodoAuth } from "../../hooks/useTodoAuth";
import { Container, ContentWrapper } from "./views/styled-component";
import Header from "../../components/header";
import { FormAdd } from "./views/todo-form";
import TodoList from "./views/todo-list";

const TodoScreen = () => {
  const { todoState, addTodoAuth, updateTodoAuth, deleteTodoAuth } =
    useTodoAuth();
  const [editListState, setEditListState] = useState({});
  const [todoListState, setTodoListState] = useState(todoState);

  useEffect(() => {
    if (todoState) {
      setTodoListState(todoState);
    }
  }, [todoState]);

  const onEventAddTodo = async (value) => {
    const newData = await addTodoAuth({
      item: value,
      currentData: todoListState,
    });
    if (!newData) {
      return;
    }
    setTodoListState(newData);
  };

  const onEventUpdateTodo = async (id, newValue) => {
    const updateData = await updateTodoAuth({
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
    const newData = await deleteTodoAuth({ id, currentData: todoListState });
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
