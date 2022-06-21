import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  }, []);

  const addUser = (data) =>
    setUsers((prev) => [...prev, { ...data, id: uuidv4() }]);

  const removeUser = (id) => {
    const cloned_users = [...users];

    const index = cloned_users.findIndex((user) => user.id === id);
    cloned_users.splice(index, 1);

    setUsers([...cloned_users]);
  };

  const values = {
    users,
    addUser,
    removeUser,
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);

  if (context === undefined) {
    throw new Error("Error message");
  }

  return context;
};
