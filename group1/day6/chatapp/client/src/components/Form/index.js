import React, { useState } from "react";
import { emit } from "../../socketApi";
import { v4 as uuidv4 } from "uuid";
import useStore from "../../store/useStore";

function Form() {
  const [message, setMessage] = useState("");
  const { addItem } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: uuidv4(),
      text: message,
      is_from_me: true,
    };

    emit("new-message", { id: data.id, text: data.text });
    addItem(data);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="bir mesaj girin..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
}

export default Form;
