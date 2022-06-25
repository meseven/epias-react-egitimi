import React, { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const socket = io("http://localhost:4000", {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("Connected!", socket.id);
    });

    socket.on("info", (online_count) => {
      setCount(online_count);
    });
  }, []);

  return (
    <div className="App">
      <h1>Online Users: {count}</h1>
    </div>
  );
}

export default App;
