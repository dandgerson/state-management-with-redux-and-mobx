import { useState } from "react";

const Users = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <div className="users">
      <h2>Users</h2>
      <hr />

      <form
        onSubmit={(e) => {
          e.preventDefault();

          console.dir(e.target);
        }}
      >
        <label htmlFor="userName">
          Name
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button disabled={!userName || !email}>Create User</button>
      </form>

      <div className="usersList">
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Users;
