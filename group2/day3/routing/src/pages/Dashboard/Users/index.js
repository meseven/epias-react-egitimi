import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import List from "./List";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <List users={users} />

      <Outlet />
    </div>
  );
}

export default Users;
