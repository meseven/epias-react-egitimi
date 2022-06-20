import React from "react";
import useToggle from "../hooks/useToggle";

function ToggleExample() {
  const { status, toggle } = useToggle(false);

  return (
    <div>
      {" "}
      {status ? "on" : "off"}
      <br />
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default ToggleExample;
