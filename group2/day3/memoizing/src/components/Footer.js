import React from "react";

function Footer({ increaseCount }) {
  console.log("Footer re-render");
  return (
    <div>
      <hr />
      Footer
      <br />
      <button onClick={increaseCount}>Arttır</button>
    </div>
  );
}

export default React.memo(Footer);
