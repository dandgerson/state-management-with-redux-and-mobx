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

const defaultCardData = {
  title: "",
  description: "",
  assignedTo: "",
};

export const createCard = ({ listId, cardData }) => {
  const card = {
    id: Date.now().toString(),
    ...defaultCardData,
    ...cardData,
  };

  return {
    type: t.CREATE_CARD,
    payload: {
      card,
      listId,
      cardId: card.id,
    },
  };
};

export default cardsReducer;
