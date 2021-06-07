import { useEffect, useState } from "react";
import * as services from "../services/todo";
import * as coreTodo from "../utils/core-todo";
import * as storages from "../utils/storage";

export const useTodoAuth = () => {
  const [todoState, setTodoState] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await fetchTodoAuth();
      setTodoState(data);
    };
    fetchTodo();
  }, []);

  const isValidateValue = (value) => {
    const validatePattern = /^[a-zA-Z ก-๛ 0-9]+$/;
    return validatePattern.test(value);
  };

  const fetchTodoAuth = async () => {
    try {
      const response = await services.fetchTodoList();
      return coreTodo.mapDataToState(response?.data);
    } catch (error) {
      alert("failed get todo list: " + error);
    }
  };

  const addTodoAuth = async ({ item, currentData }) => {
    if (!isValidateValue(item)) {
      alert("input invalid");
      return;
    }
    try {
      const token = (await storages.getAuthToken()) || "dummyToken";
      if (!token) {
        throw new Error("Invalid token");
      }
      const reqBody = {
        title: item,
      };
      const response = await services.addTodoList({ reqBody, token });
      const newData = coreTodo.addNewDataToState({
        oldData: currentData,
        newData: response.data,
      });
      return newData;
    } catch (error) {
      alert("failed add todo: " + error);
    }
  };

  const updateTodoAuth = async ({ id, item, currentData }) => {
    if (!isValidateValue(item)) {
      alert("input invalid");
      return;
    }
    try {
      const token = (await storages.getAuthToken()) || "dummyToken";
      if (!token) {
        throw new Error("Invalid token");
      }
      const reqBody = {
        title: item,
      };
      const response = await services.updateTodoList({ id, reqBody, token });
      const updateData = coreTodo.updateNewDataToState({
        oldData: currentData,
        newData: response.data,
      });
      return updateData;
    } catch (error) {
      alert("failed update todo: " + error);
    }
  };

  const deleteTodoAuth = async ({ id, currentData }) => {
    try {
      const token = (await storages.getAuthToken()) || "dummyToken";
      if (!token) {
        throw new Error("Invalid token");
      }
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
    addTodoAuth,
    updateTodoAuth,
    deleteTodoAuth,
  };
};
