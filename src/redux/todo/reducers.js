import * as TYPES from "./types";

export const todoListReducer = (state = {}, { type, payload = {} }) => {
  switch (type) {
    case TYPES.TODO_GET_TODO_LIST_REQ:
    default:
      return state;
  }
};
