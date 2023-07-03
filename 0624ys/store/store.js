import create from 'zustand';

const useStore = create((set) => ({
  turn: true,
  turnOn: () => set({ turn: true }),
  turnOff: () => set({ turn: false }),
}));


export default useStore;