import React from "react";

function Header({ increment }) {
  console.log("Header re-render");

  const numbers = new Array(5)
    .fill()
    .map(() => Math.floor(Math.random() * 100));

  return (
    <div>
      Header
      <br />
      {JSON.stringify(numbers, null, 2)}
      <br />
      <button onClick={() => increment(3)}>Arttır</button>
      <hr />
    </div>
  );
}

export default React.memo(Header);
