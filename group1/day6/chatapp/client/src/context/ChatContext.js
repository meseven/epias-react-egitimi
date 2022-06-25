import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [chat, setChat] = useState([]);

  const addChatItem = (data) => setChat((prev) => [...prev, data]);

  const values = {
    chat,
    addChatItem,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);

  if (context === undefined) {
    throw new Error("Custom error message.");
  }

  return context;
};
