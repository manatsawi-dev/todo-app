const KEY_AUTH = "user_token";

export const saveAuthToken = async (token) => {
  localStorage.setItem(KEY_AUTH, token);
};

export const getAuthToken = async () => {
  const token = localStorage.getItem(KEY_AUTH);
  return token;
};

export const clearStorage = () => {
  localStorage.clear();
};
