import * as configs from "./config";

export const authLogin = async (reqBody) => {
  try {
    const API_URL = `${configs.HOST_URL}auth/login/`;
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        ...configs.header,
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

export const authRegister = async (reqBody) => {
  try {
    const API_URL = `${configs.HOST_URL}auth/register/`;
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        ...configs.header,
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

export const authLogout = async () => {
  try {
    const API_URL = `${configs.HOST_URL}auth/logout/`;
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        ...configs.header,
      },
    });
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    throw new Error(error);
  }
};
