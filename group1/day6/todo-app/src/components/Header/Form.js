import React, { useState } from "react";
import { useTodo } from "../../context/TodoContext";

function Form() {
  const [text, setText] = useState("");
  const { addItem } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return false;
    }

    addItem({ text });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default Form;
