import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";

const store = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
