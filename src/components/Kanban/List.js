import CardContainer from "./CardContainer";
import CreateCardContainer from "./CreateCardContainer";

const List = ({ list = {}, removeList }) => {
  return (
    <div className="list">
      <div className="list_title">{list.title}</div>

      <CreateCardContainer listId={list.id} />

      <div className="cardsList">
        {list.cards?.map((cardId) => (
          <CardContainer key={cardId} cardId={cardId} />
        ))}
      </div>
    </div>
  );
};

export default List;
