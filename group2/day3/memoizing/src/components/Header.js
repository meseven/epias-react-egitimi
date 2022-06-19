import React from "react";

function Header({ count }) {
  console.log("Header re-render");

  const arr = new Array(count)
    .fill()
    .map(() => Math.floor(Math.random() * 100));

  return (
    <div>
      Header
      <br />
      {JSON.stringify(arr, null, 2)}
      <hr />
    </div>
  );
}

export default React.memo(Header);
