import React from "react";
import { useColor } from "../context/ColorContext";

function ActiveColor() {
  const { activeColor } = useColor();

  return (
    <div className="active-color">
      <h3>{activeColor}</h3>
    </div>
  );
}

export default ActiveColor;
