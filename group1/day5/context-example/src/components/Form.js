import React, { useState } from "react";
import { useUsers } from "../context/UsersContext";

function Form() {
  const [name, setName] = useState("");
  const { addUser } = useUsers();

  const handleSubmit = (e) => {
    e.preventDefault();

    addUser({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="fullname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
