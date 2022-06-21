import React from "react";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLang();

  return (
    <div>
      <h3>Settings</h3>

      <h4>Theme</h4>
      <div>Theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <h4>Language</h4>
      <div>Language: {lang}</div>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="tr-TR">Türkçe</option>
        <option value="en-US">İngilizce</option>
        <option value="de-DE">Almanca</option>
      </select>
    </div>
  );
}

export default Settings;
