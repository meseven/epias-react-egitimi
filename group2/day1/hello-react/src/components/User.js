import React, { useState } from "react";

function User({ data }) {
  const [user, setUser] = useState(data);

  const handleChange = () => {
    setUser((prev) => ({ ...prev, id: 2 }));
  };

  return (
    <div>
      User
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
      <button onClick={handleChange}>Click</button>
    </div>
  );
}

export default User;
