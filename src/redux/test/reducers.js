import * as TYPES from "./types";

const initCounter = {
  loading: false,
  error: null,
  value: 0,
  posts: [],
};

export const counterReducers = (
  state = initCounter,
  { type, payload = {} }
) => {
  switch (type) {
    case TYPES.INCREMENT_REQ:
      return { ...state, loading: true };
    case TYPES.INCREMENT_SUCCESS:
      return { value: state.value + payload, loading: false };
    case TYPES.INCREMENT_FAIL:
      return { ...state, loading: false, error: payload };
    case TYPES.DECREMENT_REQ:
      return { ...state, loading: true };
    case TYPES.DECREMENT_SUCCESS:
      return { value: state.value - payload, loading: false };
    case TYPES.DECREMENT_FAIL:
      return { ...state, loading: false, error: payload };
    case TYPES.API_REQ:
      return { ...state, loading: true, error: null };
    case TYPES.API_SUCCESS:
      return { ...state, loading: false, posts: [...payload] };
    case TYPES.API_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
