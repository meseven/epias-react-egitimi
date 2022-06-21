import React from "react";
import { useUsers } from "../../context/UsersContext";

function ListItem({ user }) {
  const { removeUser } = useUsers();

  return (
    <div className="list-item">
      <div className="username">{user.name}</div>{" "}
      <button onClick={() => removeUser(user.id)}>Sil</button>
    </div>
  );
}

export default ListItem;
