import { connect } from "react-redux";
import List from "./List";

const mapStateToProps = (state, ownProps) => ({
  list: state.lists.entities[ownProps.listId],
});

const mapDispatchToProps = {};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
