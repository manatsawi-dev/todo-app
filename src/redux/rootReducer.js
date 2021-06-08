import { combineReducers } from "redux";
// import { authReducer } from "./auth/reducers";
// import { todoListReducer } from "./todo/reducers";
import { counterReducers } from "./test/reducers";

const rootReducer = combineReducers({
  // auth: authReducer,
  // todo: todoListReducer,
  counter: counterReducers,
});

export default rootReducer;
