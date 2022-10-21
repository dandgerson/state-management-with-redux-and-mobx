import { lists } from "../normalized-state";
import { t } from "./cardsReducer";

const listsReducer = (state = lists, action) => {
  if (action.type === t.CREATE_CARD) {
    const { listId, cardId } = action.payload;
    return {
      ...state,
      entities: {
        ...state.entities,
        [listId]: {
          ...state.entities[listId],
          cards: [...state.entities[listId].cards, cardId],
        },
      },
    };
  }

  return state;
};

export default listsReducer;
