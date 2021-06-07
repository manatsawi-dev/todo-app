import * as TYPES from "./types";

const initTodoState = {
  loading: false,
  loadingUpdate: false,
  todoList: [],
  error: null,
};

export const todoListReducer = (
  state = initTodoState,
  { type, payload = {} }
) => {
  switch (type) {
    case TYPES.TODO_GET_TODO_LIST_REQ:
      return { ...state, loading: true, error: null };
    case TYPES.TODO_GET_TODO_LIST_SUCCESS:
      return { ...state, loading: false, todoList: payload };
    case TYPES.TODO_GET_TODO_LIST_FAIL:
      return { ...state, loading: false, error: payload };
    case TYPES.TODO_ADD_TODO_REQ:
      return { ...state, loadingUpdate: true, error: null };
    case TYPES.TODO_ADD_TODO_SUCCESS:
      return { ...state, loadingUpdate: false, todoList: payload };
    case TYPES.TODO_ADD_TODO_FAIL:
      return { ...state, loadingUpdate: false, error: payload };
    default:
      return state;
  }
};
