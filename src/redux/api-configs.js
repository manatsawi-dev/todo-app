export const HOST_URL = "http://206.189.89.204/app/";

export const header = {
  "Content-Type": "application/json",
};

export const headerAuth = (token) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};
