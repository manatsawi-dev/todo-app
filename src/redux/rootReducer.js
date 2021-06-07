import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { todoListReducer } from "./todo/reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoListReducer,
});

export default rootReducer;
