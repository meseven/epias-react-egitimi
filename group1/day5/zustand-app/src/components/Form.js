import React, { useState } from "react";
import useUsers from "../store/useUsers";

function Form() {
  const [name, setName] = useState("");
  const addUser = useUsers((state) => state.addUser);

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
