import { connect } from "react-redux";
import { createCard } from "../../store/cardsReducer";
import CreateCard from "./CreateCard";

const CreateCardContainer = connect(null, {
  createCard,
})(CreateCard);

export default CreateCardContainer;
