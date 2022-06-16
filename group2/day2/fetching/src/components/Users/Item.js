import React from "react";

function Item({ user, setActiveUserId }) {
  return (
    <div className="list-item">
      <span onClick={() => setActiveUserId(user.id)}>{user.name}</span>
    </div>
  );
}

export default Item;
