import React, { useState } from "react";
import useUsers from "../store/useUsers";

function Form() {
  const [name, setName] = useState("");
  const addUser = useUsers((state) => state.addUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    addUser({ name });
    // setName("");
  };

  console.log("Form re-render");

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="İsim giriniz"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
}

export default Form;
