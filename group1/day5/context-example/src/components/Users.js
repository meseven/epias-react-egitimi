import React from "react";
import { useUsers } from "../context/UsersContext";
import Form from "./Form";

function Users() {
  const { users, deleteUser } = useUsers();

  return (
    <div>
      <h2>Users</h2>

      <Form />

      {users.map((user) => (
        <div key={user.id} className="list-item">
          <div>{user.name}</div>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Users;
