import { cards } from "../normalized-state";

export const t = {
  CREATE_CARD: "CREATE_CARD",
};

const cardsReducer = (state = cards, action) => {
  if (action.type === t.CREATE_CARD) {
    const { card, cardId } = action.payload;
    return {
      entities: {
        ...state.entities,
        [cardId]: card,
      },
      ids: [...state.ids, cardId],
    };
  }

  return state;
};

export default cardsReducer;
