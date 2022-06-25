import React from "react";
import { useChat } from "../../context/ChatContext";
import useStore from "../../store/useStore";
import Item from "./Item";

function List() {
  const { messages } = useStore();

  return (
    <div>
      {messages.map((message) => (
        <Item key={message.id} message={message} />
      ))}
    </div>
  );
}

export default List;
