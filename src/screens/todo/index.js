import React, { useState } from "react";
import { Container, ContentWrapper } from "./views/styled-component";
import Header from "../../components/header";
import { FormAdd } from "./views/todo-form";
import TodoList from "./views/todo-list";

const TodoScreen = () => {
  const [todoListState, setTodoListState] = useState([]);
  const [editListState, setEditListState] = useState({});

  const onEventAddTodo = (value) => {
    if (!value) {
      return;
    }
    const id = Math.floor(100000 + Math.random() * 900000);
    const todoItem = {
      id,
      value,
    };
    setTodoListState([...todoListState, todoItem]);
  };

  const onEventEditTodo = (id) => {
    if (editListState[id]) {
      return;
    }
    let newEdit = { ...editListState };
    newEdit[id] = true;
    setEditListState(newEdit);
  };

  const onEventUpdateTodo = (id, newValue) => {
    if (!newValue) {
      return;
    }
    let targetItem = todoListState.findIndex((element) => element.id === id);
    if (targetItem !== undefined) {
      const updateItem = [...todoListState];
      updateItem[targetItem].value = newValue;
      setTodoListState(updateItem);
    }

    if (!editListState[id]) {
      return;
    }
    deleteEditList(id);
  };

  const onEventDeleteTodo = (id) => {
    deleteEditList(id);
    setTodoListState((prev) =>
      prev.slice(0).filter((element) => element.id !== id)
    );
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
