import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as todoActions from "../redux/todo/actions";

export const useTodoNoAuth = () => {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo.todoList);

  useEffect(() => {
    dispatch(todoActions.todoFetchTodoList());
  }, [dispatch]);

  const isValidateValue = (value) => {
    const validatePattern = /^[a-zA-Z ก-๛ 0-9]+$/;
    return validatePattern.test(value);
  };

  const dispatchAddTodoNoAuth = ({ item, currentData }) => {
    if (!isValidateValue(item)) {
      alert("input invalid");
      return;
    }
    const reqBody = {
      title: item,
    };
    dispatch(todoActions.todoAddTodo({ reqBody, currentData }));
  };

  const dispatchUpdateTodoNoAuth = async ({ id, item, currentData }) => {
    if (!isValidateValue(item)) {
      alert("input invalid");
      return;
    }
    const reqBody = {
      title: item,
    };
    dispatch(todoActions.todoUpdateTodo({ id, reqBody, currentData }));
  };

  const deleteTodoNoAuth = async ({ id, currentData }) => {
    dispatch(todoActions.todoDeleteTodo({ id, currentData }));
  };

  return {
    todoState,
    dispatchAddTodoNoAuth,
    dispatchUpdateTodoNoAuth,
    deleteTodoNoAuth,
  };
};
