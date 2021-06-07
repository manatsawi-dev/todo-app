export const HOST_URL = "http://206.189.89.204/app/";

export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjBiZGEwNjAyZDQxZGEyNzMyYjcyMjM5IiwiaWF0IjoxNjIzMDQwMDk2LCJleHAiOjE2MjU2MzIwOTZ9.EQy5exWUptudZ7t2-T_1yvQALLv1h85U5yvSkPO8-c8";

export const header = {
  "Content-Type": "application/json",
};

export const headerAuth = (token) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const fixedHeader = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
};
