import { lists } from "../normalized-state";

const listsReducer = (state = lists, action) => {
  console.log({ state, action });
  return state;
};

export default listsReducer;
