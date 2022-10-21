import Card from "./Card";
import CardContainer from "./CardContainer";
import CreateCard from "./CreateCard";

const List = ({ list = {}, removeList }) => {
  console.log({ list });
  return (
    <div className="list">
      <div className="list_title">{list.title}</div>

      <CreateCard />

      <div className="cardsList">
        {list.cards?.map((cardId) => (
          <CardContainer key={cardId} cardId={cardId} />
        ))}
      </div>
    </div>
  );
};

export default List;
