import React from "react";

function User({ data }) {
  console.log("User re-render");
  return (
    <div>
      <hr />
      User
      <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default React.memo(User);
