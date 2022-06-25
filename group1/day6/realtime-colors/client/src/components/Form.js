import React, { useState } from "react";
import { useColor } from "../context/ColorContext";
import { emit } from "../socketApi";

function Form() {
  const { setActiveColor } = useColor();
  const [color, setColor] = useState("#FFFFFF");

  const handleSubmit = () => {
    emit("new-color", color);
    setActiveColor(color);
  };

  return (
    <div className="picker">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
