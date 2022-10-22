import { t } from ".";
import { cards } from "../normalized-state";
import { addEntity } from "./_utilities";

const cardsReducer = (state = cards, action) => {
  if (action.type === t.CREATE_CARD) {
    const { card, cardId } = action.payload;
    return addEntity(state, card, cardId);
  }

  return state;
};

export default cardsReducer;
