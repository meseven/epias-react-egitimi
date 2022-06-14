import React, { useState } from "react";

function Counter() {
  const [name, setName] = useState("Ahmet");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const handleChangeName = () => setName("Murat");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Arttır</button>

      <hr />

      <div>name: {name}</div>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
}

export default Counter;
