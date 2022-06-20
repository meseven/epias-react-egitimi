import React from "react";
import { Link } from "react-router-dom";

function ListItem({ user }) {
  return (
    <div>
      <Link to={`/users/${user.id}`} state={{ user }}>
        {user.name}
      </Link>
    </div>
  );
}

export default ListItem;
