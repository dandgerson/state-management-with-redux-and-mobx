import { connect } from "react-redux";
import { t } from "../../store";
import Lists from "./Lists";

const mapStateToProps = (state) => ({
  listsIds: state.lists.ids,
});

const defaultListData = {
  title: "",
  cards: [],
};

const mapDispatchToProps = (dispatch) => {
  return {
    createList: ({ listData }) => {
      const list = {
        id: Date.now().toString(),
        ...defaultListData,
        ...listData,
      };
      dispatch({
        type: t.CREATE_LIST,
        payload: {
          list,
          listId: list.id,
        },
      });
    },
  };
};

const ListsContainer = connect(mapStateToProps, mapDispatchToProps)(Lists);

export default ListsContainer;
