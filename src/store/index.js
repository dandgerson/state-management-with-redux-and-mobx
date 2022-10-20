import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import listsReducer from "./listsReducer";

const store = createStore(
  combineReducers({
    counter: counterReducer,
    lists: listsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
