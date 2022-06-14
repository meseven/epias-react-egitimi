import React, { useState } from "react";

function User() {
  const [user, setUser] = useState({
    name: "Ahmet",
    surname: "Vural",
    age: 40,
  });

  const handleClick = () => {
    setUser({ ...user, name: "Mehmet", age: 20 });
  };

  return (
    <div>
      <h2>User</h2>
      <div>{user.name}</div>
      <div>{user.surname}</div>
      <div>{user.age}</div>

      <button onClick={handleClick}>Reload</button>
    </div>
  );
}

export default User;
