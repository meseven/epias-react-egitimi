import create from "zustand";

const useCounter = create((set) => ({
  users: [],
  fetch: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    set({ users: await response.json() });
  },
}));

export default useCounter;
