import * as TYPES from "./types";

export const authReducer = (state = {}, { type, payload = {} }) => {
  switch (type) {
    case TYPES.AUTH_LOGIN_REQ:
    default:
      return state;
  }
};
