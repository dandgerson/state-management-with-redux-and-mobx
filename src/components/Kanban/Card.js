const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card_title">{card.title}</div>
      <div className="card_description">{card.description}</div>
    </div>
  );
};

export default Card;
