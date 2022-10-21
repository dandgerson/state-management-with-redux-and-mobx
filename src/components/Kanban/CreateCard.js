import { useState } from "react";

const CreateCard = () => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  return (
    <div className="createCard">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          console.dir(e.target);
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
