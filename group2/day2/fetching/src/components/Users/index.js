import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./List";

function Users({ setActiveUserId }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  }, []);

  return (
    <div>
      <h2>Users</h2>

      <List users={users} setActiveUserId={setActiveUserId} />
    </div>
  );
}

export default Users;
