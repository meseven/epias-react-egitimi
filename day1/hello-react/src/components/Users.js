import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState(["Ahmet", "Ayşe", "Hande", "Murat"]);

  const handleClick = () => {
    setUsers((prev) => [...prev, Math.floor(Math.random() * 100)]);
  };

  return (
    <div>
      <h1>Users</h1>

      {users.map((user, i) => (
        <div key={i}>{user}</div>
      ))}

      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Users;
