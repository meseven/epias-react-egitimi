import React from "react";
import Item from "./Item";

function List({ users, setActiveUserId }) {
  return (
    <>
      {users.map((user) => (
        <Item key={user.id} user={user} setActiveUserId={setActiveUserId} />
      ))}
    </>
  );
}

export default List;
