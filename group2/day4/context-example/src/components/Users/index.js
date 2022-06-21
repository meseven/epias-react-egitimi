import React from "react";
import { useUsers } from "../../context/UsersContext";
import Form from "../Form";
import List from "./List";

function Users() {
  const { users } = useUsers();

  console.log("Users re-render");

  return (
    <div>
      <h2>Kullanıcılar</h2>

      <Form />
      <List users={users} />
    </div>
  );
}

export default Users;
