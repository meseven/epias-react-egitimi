import React, { useEffect } from "react";
import useUsers from "../store/useUsers";
import Form from "./Form";

function Users() {
  const users = useUsers((state) => state.users);
  const loadData = useUsers((state) => state.loadData);
  const deleteUser = useUsers((state) => state.deleteUser);

  useEffect(() => {
    loadData();
  }, []);

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
