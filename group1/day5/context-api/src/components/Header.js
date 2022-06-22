import React from "react";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLang();

  return (
    <div>
      Header
      <div>Active Theme: {theme}</div>
      <div>Active Language: {lang}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <hr />
    </div>
  );
}

export default Header;
