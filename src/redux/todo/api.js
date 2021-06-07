import * as configs from "../api-configs";

export const fetchTodoList = async () => {
  const API_URL = `${configs.HOST_URL}no_auth/todos/`;
  const response = await fetch(API_URL, {
    method: "GET",
    ...configs.header,
  });
  return response.json();
};

export const addTodoList = async ({ reqBody, token }) => {
  const headers = token ? configs.headerAuth(token) : configs.header;
  const API_URL = `${configs.HOST_URL}no_auth/todos/`;
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      ...headers,
    },
    body: JSON.stringify(reqBody),
  });
  return response.json();
};

export const updateTodoList = async ({ id, reqBody, token }) => {
  const headers = token ? configs.headerAuth(token) : configs.header;
  const API_URL = `${configs.HOST_URL}no_auth/todos/${id}`;
  const response = await fetch(API_URL, {
    method: "PUT",
    headers: {
      ...headers,
    },
    body: JSON.stringify(reqBody),
  });
  return response.json();
};

export const deleteTodoList = async ({ id, token }) => {
  const headers = token ? configs.headerAuth(token) : configs.header;
  const API_URL = `${configs.HOST_URL}no_auth/todos/${id}`;
  const response = await fetch(API_URL, {
    method: "DELETE",
    headers: {
      ...headers,
    },
  });
  return response.json();
};
