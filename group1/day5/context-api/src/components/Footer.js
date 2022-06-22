import React from "react";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();

  console.log(theme);

  return <div>Footer</div>;
}

export default Footer;
