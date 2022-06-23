import React, { useEffect } from "react";
import { useColor } from "../context/ColorContext";
import { init, subscribe } from "../socketApi";
import ActiveColor from "./ActiveColor";
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
      <div className="picker">
        <ActiveColor />
        <Form />
      </div>
    </div>
  );
}

export default Container;
