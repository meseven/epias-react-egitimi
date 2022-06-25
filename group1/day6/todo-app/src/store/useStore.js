import create from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const useStore = (set) => ({
  activeFilter: "all",
  setActiveFilter: (data) => set(() => ({ activeFilter: data })),

  todos: [
    { id: 1, text: "React Öğren", isCompleted: false },
    { id: 2, text: "JavaScript Öğren", isCompleted: true },
  ],
  addItem: (data) =>
    set((state) => ({ todos: [{ id: uuidv4(), ...data }, ...state.todos] })),

  toggle: (id) =>
    set((state) => {
      const cloned = [...state.todos];

      const new_arr = cloned.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      );

      return {
        todos: [...new_arr],
      };
    }),
  toggleAll: () =>
    set((state) => {
      const next_state = !state.todos.every((item) => item.isCompleted);
      const new_arr = state.todos.map((todo) => ({
        ...todo,
        isCompleted: next_state,
      }));

      return {
        todos: [...new_arr],
      };
    }),

  removeItem: (id) =>
    set((state) => {
      const cloned = [...state.todos];
      const index = cloned.findIndex((item) => item.id === id);

      cloned.splice(index, 1);
      return {
        todos: [...cloned],
      };
    }),

  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.isCompleted),
    })),
});

export default create(devtools(useStore));
