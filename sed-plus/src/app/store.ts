// app/store.ts
import { create } from 'zustand'

interface AppState {
  automatons: Automaton[]
  activeTabId?: string

  addAutomaton: () => void
  setActiveTab: (id: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  automatons: [],
  activeTabId: undefined,

  addAutomaton: () =>
    set((state) => {
      const newAutomaton = {
        id: crypto.randomUUID(),
        name: `Automaton ${state.automatons.length + 1}`,
        states: [],
        events: [],
        transitions: []
      }
      return {
        automatons: [...state.automatons, newAutomaton],
        activeTabId: newAutomaton.id
      }
    }),

  setActiveTab: (id) => set({ activeTabId: id })
}))