import create from "zustand";
import { v4 as uuidv4 } from "uuid";

const useCounter = create((set) => ({
  users: [],
  fetch: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    set({ users: await response.json() });
  },
  addUser: (data) =>
    set((state) => ({ users: [...state.users, { id: uuidv4(), ...data }] })),
}));

export default useCounter;
