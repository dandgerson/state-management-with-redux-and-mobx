import { connect } from "react-redux";
import { t } from "../../store";
import List from "./List";

const mapStateToProps = (state, ownProps) => ({
  list: state.lists.entities[ownProps.listId],
});

const ListContainer = connect(mapStateToProps)(List);

export default ListContainer;
