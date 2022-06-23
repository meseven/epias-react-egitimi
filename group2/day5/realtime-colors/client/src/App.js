import "./App.css";
import React, { useEffect, useState } from "react";

import { io } from "socket.io-client";
import { to_Encrypt } from "./aes";

const defaultColor = "#FFF";
let socket = null;

function App() {
  const [color, setColor] = useState(defaultColor);
  const [activeColor, setActiveColor] = useState(defaultColor);

  useEffect(() => {
    socket = io("http://localhost:4000", {
      transports: ["websocket"],
      secure: true,
    });

    socket.on("connect", () => {
      console.log("Connected!");
    });

    socket.on("new-color", (data) => {
      console.log("New color:", data);
      setActiveColor(data);
      setColor(data);
    });
  }, []);

  const handleClick = () => {
    setActiveColor(color);

    const encrypted = to_Encrypt(color);
    console.log("encrypted", encrypted);

    socket.emit("new-color", color);
  };

  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <div className="picker">
        <div className="active-color">
          <h3>{activeColor}</h3>
        </div>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={handleClick}>Save</button>
      </div>
    </div>
  );
}

export default App;
