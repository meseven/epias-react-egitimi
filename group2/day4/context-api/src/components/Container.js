import React from "react";
import { useTheme } from "../context/ThemeContext";
import Header from "./Header";
import Settings from "./Settings";

function Container() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Header />
      <Settings />
    </div>
  );
}

export default Container;
