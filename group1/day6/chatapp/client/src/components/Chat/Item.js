import React from "react";

function Item({ message }) {
  return (
    <div className={`chat-item ${message.is_from_me ? "fromMe" : ""}`}>
      <div>{message.text}</div>
    </div>
  );
}

export default Item;
