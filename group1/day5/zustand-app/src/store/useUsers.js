import create from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const useUsers = (set) => ({
  users: [],
  loadData: async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    set({ users: await response.json() });
  },
  addUser: (data) =>
    set((state) => ({ users: [...state.users, { id: uuidv4(), ...data }] })),

  deleteUser: (id) =>
    set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
});

export default create(devtools(useUsers));
