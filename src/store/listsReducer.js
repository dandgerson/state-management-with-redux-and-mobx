import set from "lodash/fp/set";
import { lists } from "../normalized-state";
import { t } from "./cardsReducer";

const listsReducer = (state = lists, action) => {
  if (action.type === t.CREATE_CARD) {
    const { listId, cardId } = action.payload;

    const cards = [...state.entities[listId].cards, cardId];
    return set(["entities", listId, "cards"], cards, state);
  }

  return state;
};

export default listsReducer;
