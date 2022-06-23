import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [activeColor, setActiveColor] = useState("#FFFFFF");

  return (
    <ColorContext.Provider value={{ activeColor, setActiveColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);

  if (context === undefined) {
    throw new Error(
      "useColor hooku ContextProvider dışında kullanmaya çalışıyorsunuz."
    );
  }

  return context;
};
