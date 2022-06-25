import React, { useEffect } from "react";
import { useColor } from "../context/ColorContext";
import { init, subscribe } from "../socketApi";
import Form from "./Form";

function Container() {
  const { activeColor, setActiveColor } = useColor();

  useEffect(() => {
    init();

    subscribe("new-color", (data) => {
      setActiveColor(data);
    });
  }, []);

  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <div className="color-text">{activeColor}</div>
      <Form />
    </div>
  );
}

export default Container;
