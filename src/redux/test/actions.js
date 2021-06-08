import * as TYPES from "./types";

export const increment = (value) => (dispatch) => {
  dispatch({ type: TYPES.INCREMENT_REQ });
  dispatch({ type: TYPES.INCREMENT_SUCCESS, payload: value });

  //
  // dispatch({type: TYPES.INCREMENT_FAIL, payload: 'some error'})
};

export const decrement = (value) => (dispatch) => {
  dispatch({ type: TYPES.DECREMENT_REQ });
  dispatch({ type: TYPES.DECREMENT_SUCCESS, payload: value });
};

export const fetchApi = () => async (dispatch) => {
  dispatch({ type: TYPES.API_REQ });
  try {
    //
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url, { method: "GET" });
    if (response.ok) {
      const payload = await response.json();
      dispatch({ type: TYPES.API_SUCCESS, payload });
    }
    // handle error
  } catch (error) {
    dispatch({ type: TYPES.API_FAIL, payload: error });
  }
};
