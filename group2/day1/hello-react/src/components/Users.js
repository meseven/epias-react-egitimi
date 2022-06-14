import React, { useState } from "react";

function Users({ data }) {
  const [users, setUsers] = useState(data);

  const handleClick = () => {
    setUsers((prev) => [...prev, Math.floor(Math.random() * 100)]);
  };

  return (
    <div>
      <h2>Users</h2>
      {users.map((user, i) => {
        return <div key={i}>{user}</div>;
      })}

      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Users;
