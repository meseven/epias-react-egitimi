import React from "react";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const data = useTheme();

  console.log("data", data);

  return (
    <div>
      <hr />
      Footer
    </div>
  );
}

export default Footer;
