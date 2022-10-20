import { useState } from "react";

const Lists = () => {
  const [listTitle, setListTitle] = useState("");
  const [lists, setLists] = useState([]);

  return (
    <div className="lists">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          console.dir(e.target);
        }}
      >
        <label htmlFor="listTitle">
          List title
          <input
            type="text"
            name="listTitle"
            id="listTitle"
            placeholder="New list title"
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
          />
        </label>

        <button disabled={!listTitle}>Create New List</button>
      </form>

      <div className="listsList">
        {lists.map((list) => (
          <div key={list.id}>{list.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Lists;
