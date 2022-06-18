import React from "react";
import ListItem from "./ListItem";

function List({ users }) {
  return (
    <div>
      {users.map((user) => (
        <ListItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default List;
