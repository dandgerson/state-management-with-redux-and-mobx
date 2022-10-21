import { useState } from "react";

const CreateCard = ({ listId, createCard }) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  return (
    <div className="createCard">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          createCard({
            listId,
            cardData: {
              title: cardTitle,
              description: cardDescription,
            },
          });

          setCardTitle("");
          setCardDescription("");
        }}
      >
        <input
          type="text"
          name="title"
          id="cardTitle"
          placeholder="Card title"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          id="cardDescription"
          placeholder="Card description"
          value={cardDescription}
          onChange={(e) => setCardDescription(e.target.value)}
        />
        <button disabled={!cardTitle || !cardDescription}>Create Card</button>
      </form>
    </div>
  );
};

export default CreateCard;
