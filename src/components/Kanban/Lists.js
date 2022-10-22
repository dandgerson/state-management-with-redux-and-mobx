import { useState } from "react";
import ListContainer from "./ListContainer";

const Lists = ({ listsIds, createList }) => {
  const [listTitle, setListTitle] = useState("");

  return (
    <div className="lists">
      <form
        className="createList"
        onSubmit={(e) => {
          e.preventDefault();

          createList({
            listData: {
              title: listTitle,
            },
          });

          setListTitle("");
        }}
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
