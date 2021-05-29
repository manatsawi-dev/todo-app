import * as configs from "./config";

export const fetchTodoList = async () => {
  try {
    const API_URL = `${configs.HOST_URL}no_auth/todos/`;
    const response = await fetch(API_URL, {
      method: "GET",
      ...configs.header,
    });
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const addTodoList = async (reqBody) => {
  try {
    const API_URL = `${configs.HOST_URL}no_auth/todos/`;
    const response = await fetch(API_URL, {
      method: "POST",
      ...configs.header,
      body: JSON.stringify(reqBody),
    });
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTodoList = async ({ id, reqBody }) => {
  try {
    const API_URL = `${configs.HOST_URL}no_auth/todos/${id}`;
    const response = await fetch(API_URL, {
      method: "PUT",
      ...configs.header,
      body: JSON.stringify(reqBody),
    });
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodoList = async (id) => {
  try {
    const API_URL = `${configs.HOST_URL}no_auth/todos/${id}`;
    const response = await fetch(API_URL, {
      method: "DELETE",
      ...configs.header,
    });
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};
