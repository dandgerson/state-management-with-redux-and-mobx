import { connect } from "react-redux";
import CreateCard from "./CreateCard";

const defaultCardData = {
  title: "",
  description: "",
  assignedTo: "",
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCard: ({ listId, cardData }) => {
      const card = {
        id: Date.now().toString(),
        ...defaultCardData,
        ...cardData,
      };

      dispatch({
        type: "CREATE_CARD",
        payload: {
          card,
          listId,
          cardId: card.id,
        },
      });
    },
  };
};

const CreateCardContainer = connect(null, mapDispatchToProps)(CreateCard);

export default CreateCardContainer;
