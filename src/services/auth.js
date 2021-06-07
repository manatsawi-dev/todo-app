import * as configs from "./config";

export const authLogout = async () => {
  const headers = configs.header;
  try {
    const API_URL = `${configs.HOST_URL}auth/logout/`;
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        ...headers,
        ...configs.fixedHeader,
      },
    });
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    throw new Error(error);
  }
};
