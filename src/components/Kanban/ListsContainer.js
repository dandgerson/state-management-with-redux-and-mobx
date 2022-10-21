import { connect } from "react-redux";
import Lists from "./Lists";

const mapStateToProps = (state) => ({
  listsIds: state.lists.ids,
});

const ListsContainer = connect(mapStateToProps)(Lists);

export default ListsContainer;
