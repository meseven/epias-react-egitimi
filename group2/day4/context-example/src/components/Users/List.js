import React from "react";
import ListItem from "./ListItem";

function List({ users }) {
  return (
    <div className="list">
      {users.map((user) => (
        <ListItem user={user} key={user.id} />
      ))}
    </div>
  );
}

export default List;
