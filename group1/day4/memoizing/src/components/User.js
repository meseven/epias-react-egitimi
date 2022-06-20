import React from "react";

function User({ data }) {
  console.log("User re-render");

  return (
    <div>
      <h3>User</h3>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}

export default React.memo(User);
