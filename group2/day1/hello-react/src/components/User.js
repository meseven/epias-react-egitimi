import React from "react";

function User(props) {
  return (
    <div>
      User
      <div>
        <pre>{JSON.stringify(props.data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default User;
