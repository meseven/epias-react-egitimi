import React from "react";

function ListItem({ user, setActiveUserId }) {
  return (
    <div className="list-item" onClick={() => setActiveUserId(user.id)}>
      {user.name}
    </div>
  );
}

export default ListItem;
