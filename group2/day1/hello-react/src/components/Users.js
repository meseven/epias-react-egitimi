import React from "react";

function Users(props) {
  return (
    <div>
      <h2>Users</h2>
      {props.data.map((user, i) => {
        return <div key={i}>{user}</div>;
      })}
    </div>
  );
}

export default Users;
