import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [todos, setTodos] = useState([
    { id: 1, text: "React Öğren", isCompleted: false },
    { id: 2, text: "JavaScript Öğren", isCompleted: true },
  ]);

  const addItem = (data) =>
    setTodos((prev) => [...prev, { id: uuidv4(), ...data }]);

  const toggle = (id) => {
    const cloned = [...todos];
    // const index = cloned.findIndex((item) => item.id === id);

    const new_arr = cloned.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );

    setTodos([...new_arr]);
  };

  const toggleAll = () => {
    const next_state = !todos.every((item) => item.isCompleted);

    const new_arr = todos.map((todo) => ({ ...todo, isCompleted: next_state }));
    setTodos([...new_arr]);
  };

  const removeItem = (id) => {
    const cloned = [...todos];
    const index = cloned.findIndex((item) => item.id === id);

    cloned.splice(index, 1);
    setTodos([...cloned]);
  };

  const clearCompleted = () => {
    const new_arr = todos.filter((todo) => !todo.isCompleted);
    setTodos([...new_arr]);
  };

  const values = {
    todos,
    setTodos,
    addItem,
    toggle,
    removeItem,
    activeFilter,
    setActiveFilter,
    toggleAll,
    clearCompleted,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);
