import create from "zustand";
import { persist, devtools } from "zustand/middleware";

const useCounter = (set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
});

export default create(devtools(persist(useCounter, { name: "data" })));
