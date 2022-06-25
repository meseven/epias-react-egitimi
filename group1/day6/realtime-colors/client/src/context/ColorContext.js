import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [activeColor, setActiveColor] = useState("#FFFFFF");

  const values = {
    activeColor,
    setActiveColor,
  };

  return (
    <ColorContext.Provider value={values}>{children}</ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
