import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import kanbanReducer from "./kanban";

const store = createStore(
  combineReducers({
    counter: counterReducer,
    kanban: kanbanReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
