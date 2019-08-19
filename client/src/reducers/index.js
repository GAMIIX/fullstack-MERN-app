// We’ll use combinedReducers from redux to combine our
// authReducer and errorReducer into one rootReducer.
// Let’s define our rootReducer by adding the following 
// to our index.js.

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});