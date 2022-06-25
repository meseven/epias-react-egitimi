import "./App.css";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    const socket = io("http://localhost:4000", {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("Connected!");

      setIsConnected(true);
    });

    socket.on("info", (data) => {
      console.log("data", data);
      setOnlineCount(data);
    });
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div className={`dot ${isConnected ? "online" : ""}`}></div>
        <h2>Online Users</h2>
      </div>
      {isConnected && <h1>{onlineCount}</h1>}
    </div>
  );
}

export default App;
