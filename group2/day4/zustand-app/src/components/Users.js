import React, { useEffect } from "react";
import useUsers from "../store/useUsers";
import Form from "./Form";

function Users() {
  const users = useUsers((state) => state.users);
  const fetch_data = useUsers((state) => state.fetch);

  useEffect(() => {
    fetch_data();
  }, []);

  return (
    <div>
      <h2>Users</h2>

      <Form />

      <br />

      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
