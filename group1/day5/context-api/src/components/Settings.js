import React from "react";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLang();

  return (
    <div>
      <h3>Settings</h3>
      <div>Active Theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <br />
      <br />

      <div>Active Language: {lang}</div>
      <select onChange={(e) => setLang(e.target.value)}>
        <option value="tr-TR">tr-TR</option>
        <option value="en-US">en-US</option>
        <option value="de-DE">de-DE</option>
      </select>
    </div>
  );
}

export default Settings;
