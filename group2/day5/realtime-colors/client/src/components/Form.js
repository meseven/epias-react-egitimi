import React, { useState } from "react";
import { useColor } from "../context/ColorContext";
import { emit } from "../socketApi";

function Form() {
  const [color, setColor] = useState("#FFFFFF");
  const { setActiveColor } = useColor();

  const handleClick = () => {
    setActiveColor(color);

    emit("new-color", color);
  };

  return (
    <>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleClick}>Save</button>
    </>
  );
}

export default Form;
