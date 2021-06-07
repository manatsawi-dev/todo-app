import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as todoActions from "../redux/todo/actions";
import * as services from "../services/todo";
import * as coreTodo from "../utils/core-todo";

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

  const updateTodoNoAuth = async ({ id, item, currentData }) => {
    if (!isValidateValue(item)) {
      alert("input invalid");
      return;
    }
    try {
      const reqBody = {
        title: item,
      };
      const response = await services.updateTodoList({ id, reqBody });
      const updateData = coreTodo.updateNewDataToState({
        oldData: currentData,
        newData: response.data,
      });
      return updateData;
    } catch (error) {
      alert("failed update todo: " + error);
    }
  };

  const deleteTodoNoAuth = async ({ id, currentData }) => {
    try {
      await services.deleteTodoList({ id });
      const newData = coreTodo.deleteDataFromState({
        data: currentData,
        id,
      });
      return newData;
    } catch (error) {
      alert("failed delete todo: " + error);
    }
  };

  return {
    todoState,
    dispatchAddTodoNoAuth,
    updateTodoNoAuth,
    deleteTodoNoAuth,
  };
};
