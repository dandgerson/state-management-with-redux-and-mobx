import { connect } from "react-redux";
import { t } from "../../store";
import { createList } from "../../store/listsReducer";
import Lists from "./Lists";

const mapStateToProps = (state) => ({
  listsIds: state.lists.ids,
});

const ListsContainer = connect(mapStateToProps, { createList })(Lists);

export default ListsContainer;
