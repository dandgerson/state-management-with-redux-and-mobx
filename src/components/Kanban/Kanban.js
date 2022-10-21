import ListsContainer from "./ListsContainer";
import Users from "./Users";

const Kanban = () => {
  return (
    <div className="kanban">
      <Users />
      <ListsContainer />
    </div>
  );
};

export default Kanban;
