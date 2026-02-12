import { create } from "zustand";

export const useHabitStore = create((set) => ({
    habits: [],

    addHabit: (habit) => set(state => ({
        habits: [...state.habits, habit],
    })),
    deleteHabit: (id) =>
        set((state) => ({
            habits: state.habits.filter((h) => h.id != id),
        }))

}));