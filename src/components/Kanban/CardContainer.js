import { connect } from "react-redux";
import Card from "./Card";

const mapStateToProps = (state, ownProps) => ({
  card: state.cards.entities[ownProps.cardId],
});

const CardContainer = connect(mapStateToProps)(Card);

export default CardContainer;
