import { t } from ".";
import { lists } from "../normalized-state";
import { addEntity, addIdToChildren } from "./_utilities";

const listsReducer = (state = lists, action) => {
  if (action.type === t.CREATE_CARD) {
    const { listId, cardId } = action.payload;
    return addIdToChildren(state, listId, "cards", cardId);
  }

  if (action.type === t.CREATE_LIST) {
    const { listId, list } = action.payload;
    return addEntity(state, list, listId);
  }

  return state;
};

const defaultListData = {
  title: "",
  cards: [],
};

export const createList = ({ listData }) => {
  const list = {
    id: Date.now().toString(),
    ...defaultListData,
    ...listData,
  };
  return {
    type: t.CREATE_LIST,
    payload: {
      list,
      listId: list.id,
    },
  };
};

export default listsReducer;
