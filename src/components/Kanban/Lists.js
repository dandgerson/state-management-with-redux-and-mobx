import { useState } from "react";
import ListContainer from "./ListContainer";

const Lists = ({ listsIds }) => {
  const [listTitle, setListTitle] = useState("");

  return (
    <div className="lists">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          console.dir(e.target);
        }}
        className="createList"
      >
        <input
          type="text"
          name="listTitle"
          id="listTitle"
          placeholder="New list title"
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
        />

        <button disabled={!listTitle}>Create New List</button>
      </form>

      <div className="listsList">
        {listsIds.map((id) => (
          <ListContainer key={id} listId={id} />
        ))}
      </div>
    </div>
  );
};

export default Lists;
