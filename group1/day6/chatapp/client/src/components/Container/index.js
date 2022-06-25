import React, { useEffect } from "react";
import { init, subscribe } from "../../socketApi";
import useStore from "../../store/useStore";
import Chat from "../Chat";
import Form from "../Form";

function Container() {
  const { addItem } = useStore();

  useEffect(() => {
    init();

    subscribe("new-message", (data) => {
      addItem(data);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Chat />
        <Form />
      </div>
    </div>
  );
}

export default Container;
