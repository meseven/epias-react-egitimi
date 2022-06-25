import create from "zustand";

const useStore = create((set) => ({
  messages: [],
  addItem: (data) => set((state) => ({ messages: [...state.messages, data] })),
}));

export default useStore;
