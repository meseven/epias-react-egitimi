import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./List";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Method-1
    // axios(`${process.env.REACT_APP_BASE_ENDPOINT}/users`).then((res) =>
    //   setUsers(res.data)
    // );

    // Method-2
    // const getData = async () => {
    //   const { data } = await axios(
    //     `${process.env.REACT_APP_BASE_ENDPOINT}/users`
    //   );

    //   setUsers(data);
    // };
    // getData();

    // Method-3
    (async () => {
      const { data } = await axios(
        `${process.env.REACT_APP_BASE_ENDPOINT}/users`
      );

      setUsers(data);
    })();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <List users={users} />
    </div>
  );
}

export default Users;
