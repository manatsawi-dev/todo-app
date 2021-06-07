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

export const addTodoList = async ({ reqBody, token }) => {
  const headers = token ? configs.headerAuth(token) : configs.header;
  try {
    const API_URL = `${configs.HOST_URL}no_auth/todos/`;
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        ...headers,
      },
      body: JSON.stringify(reqBody),
    });
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTodoList = async ({ id, reqBody, token }) => {
  const headers = token ? configs.headerAuth(token) : configs.header;
  try {
    const API_URL = `${configs.HOST_URL}no_auth/todos/${id}`;
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        ...headers,
      },
      body: JSON.stringify(reqBody),
    });
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodoList = async ({ id, token }) => {
  const headers = token ? configs.headerAuth(token) : configs.header;
  try {
    const API_URL = `${configs.HOST_URL}no_auth/todos/${id}`;
    const response = await fetch(API_URL, {
      method: "DELETE",
      headers: {
        ...headers,
      },
    });
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};
