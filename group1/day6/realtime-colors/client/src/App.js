import "./App.css";
import React from "react";
import { ColorContextProvider } from "./context/ColorContext";
import Container from "./components/Container";

function App() {
  return (
    <ColorContextProvider>
      <Container />
    </ColorContextProvider>
  );
}

export default App;
