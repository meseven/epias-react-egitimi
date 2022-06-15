import React from "react";
import ListItem from "./ListItem";

function List({ users, setActiveUserId }) {
  return (
    <div>
      {users.map((user) => (
        <ListItem key={user.id} user={user} setActiveUserId={setActiveUserId} />
      ))}
    </div>
  );
}

export default List;
