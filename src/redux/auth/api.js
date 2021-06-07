import * as configs from "../api-configs";

export const authLogin = async (reqBody) => {
  const API_URL = `${configs.HOST_URL}auth/login/`;
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      ...configs.header,
    },
    body: JSON.stringify(reqBody),
  });
  return response.json();
};

export const authRegister = async (reqBody) => {
  const API_URL = `${configs.HOST_URL}auth/register/`;
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      ...configs.header,
    },
    body: JSON.stringify(reqBody),
  });
  return response.json();
};

export const authLogout = async (token) => {
  const headers = token ? configs.headerAuth(token) : configs.header;
  const API_URL = `${configs.HOST_URL}auth/logout/`;
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      ...headers,
    },
  });
  return response.json();
};
