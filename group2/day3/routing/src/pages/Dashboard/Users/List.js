import React from "react";
import ListItem from "./ListItem";

function List({ users }) {
  return users.map((user) => <ListItem key={user.id} user={user} />);
}

export default List;
