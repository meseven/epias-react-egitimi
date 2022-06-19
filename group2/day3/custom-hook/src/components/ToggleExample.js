import React from "react";
import useToggle from "../hooks/useToggle";

function ToggleExample() {
  const { toggle, data } = useToggle(true);

  return (
    <div>
      {data ? "Evet" : "Hayır"}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default ToggleExample;
