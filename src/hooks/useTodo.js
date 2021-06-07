import { useEffect, useState } from "react";

import * as services from "../services/todo";
import * as coreTodo from "../utils/core-todo";

export const useTodoNoAuth = () => {
  const [todoState, setTodoState] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await fetchTodoNoAuth();
      setTodoState(data);
    };
    fetchTodo();
  }, []);

  const isValidateValue = (value) => {
    const validatePattern = /^[a-zA-Z ก-๛ 0-9]+$/;
    return validatePattern.test(value);
  };

  const fetchTodoNoAuth = async () => {
    try {
      const response = await services.fetchTodoList();
      return coreTodo.mapDataToState(response?.data);
    } catch (error) {
      alert("failed get todo list: " + error);
    }
  };

  const addTodoNoAuth = async ({ item, currentData }) => {
    if (!isValidateValue(item)) {
      alert("input invalid");
      return;
    }
    try {
      const reqBody = {
        title: item,
      };
      const response = await services.addTodoList(reqBody);
      const newData = coreTodo.addNewDataToState({
        oldData: currentData,
        newData: response.data,
      });
      return newData;
    } catch (error) {
      alert("failed add todo: " + error);
    }
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
      await services.deleteTodoList(id);
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
    addTodoNoAuth,
    updateTodoNoAuth,
    deleteTodoNoAuth,
  };
};
