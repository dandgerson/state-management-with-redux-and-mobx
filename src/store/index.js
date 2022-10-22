import { combineReducers, createStore } from "redux";
import cardsReducer from "./cardsReducer";
import counterReducer from "./counterReducer";
import listsReducer from "./listsReducer";

export const t = {
  CREATE_CARD: "CREATE_CARD",
  CREATE_LIST: "CREATE_LIST",
};

const store = createStore(
  combineReducers({
    counter: counterReducer,
    lists: listsReducer,
    cards: cardsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
