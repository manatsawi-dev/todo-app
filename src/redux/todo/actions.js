import * as TYPES from "./types";
import * as API from "./api";
// import * as storages from "../../utils/storage";
import * as logic from "./logic";

export const todoFetchTodoList = () => async (dispatch) => {
  dispatch({ type: TYPES.TODO_GET_TODO_LIST_REQ });
  try {
    const response = await API.fetchTodoList();
    if (response.data) {
      const payload = logic.mapDataToState(response?.data);
      dispatch({ type: TYPES.TODO_GET_TODO_LIST_SUCCESS, payload });
    }
    if (response?.error) {
      throw new Error(response.error);
    }
  } catch (error) {
    dispatch({
      type: TYPES.TODO_GET_TODO_LIST_FAIL,
      payload: error?.toString(),
    });
  }
};

export const todoAddTodo =
  ({ reqBody, currentData }) =>
  async (dispatch) => {
    dispatch({ type: TYPES.TODO_ADD_TODO_REQ });
    try {
      const response = await API.addTodoList({ reqBody });
      if (response.data) {
        const payload = logic.addNewDataToState({
          oldData: currentData,
          newData: response.data,
        });
        dispatch({ type: TYPES.TODO_ADD_TODO_SUCCESS, payload });
      }
      if (response?.error) {
        throw new Error(response.error);
      }
    } catch (error) {
      dispatch({
        type: TYPES.TODO_ADD_TODO_FAIL,
        payload: error?.toString(),
      });
    }
  };
