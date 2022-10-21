import Card from "./Card";
import CreateCard from "./CreateCard";

const List = ({ list = {}, removeList }) => {
  console.log({ list });
  return (
    <div className="list">
      <div className="list_title">{list.title}</div>

      <CreateCard />

      <div className="cardsList">
        {list.cards?.map((cardId) => (
          <Card key={cardId} cardId={cardId} listId={list.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
