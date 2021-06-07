import * as TYPES from "./types";

const initAuth = {
  loading: false,
  user: null,
  token: null,
  error: null,
};

export const authReducer = (state = initAuth, { type, payload = {} }) => {
  switch (type) {
    case TYPES.AUTH_LOGIN_REQ:
      return { ...state, loading: true, error: null };
    case TYPES.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        token: payload.token,
      };
    case TYPES.AUTH_LOGIN_FAIL:
      return { ...state, loading: false, error: payload };
    case TYPES.AUTH_REGISTER_REQ:
      return { ...state, loading: true, error: null };
    case TYPES.AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        token: payload.token,
      };
    case TYPES.AUTH_REGISTER_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
