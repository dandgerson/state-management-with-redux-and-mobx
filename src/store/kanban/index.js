import { combineReducers } from "redux";
import listsReducer from "./listsReducer";

const kanbanReducer = combineReducers({
  lists: listsReducer,
});

export default kanbanReducer;
