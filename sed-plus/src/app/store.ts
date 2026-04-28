import { create } from 'zustand'
import { Automaton } from '../domain/automaton'
import { State } from '../domain/state'
import { Transition } from '../domain/transition'

type Mode = 'idle' | 'add_state' | 'add_transition'

interface AppState {
  automatons: Automaton[]
  activeTabId?: string

  mode: Mode
  pendingTransitionFrom?: string

  // selectors
  getActiveAutomaton: () => Automaton | undefined

  // automaton
  addAutomaton: () => void
  setActiveTab: (id: string) => void

  // modes
  setMode: (mode: Mode) => void

  // actions
  addState: (x: number, y: number) => void
  startTransition: (stateId: string) => void
  finishTransition: (stateId: string) => void
}

export const useAppStore = create<AppState>((set, get) => ({
  automatons: [],
  activeTabId: undefined,

  mode: 'idle',
  pendingTransitionFrom: undefined,

  getActiveAutomaton: () =>
    get().automatons.find(a => a.id === get().activeTabId),

  addAutomaton: () =>
    set((state) => {
      const newAutomaton: Automaton = {
        id: crypto.randomUUID(),
        name: `Automaton ${state.automatons.length + 1}`,
        states: [],
        transitions: [],
        events: []
      }

      return {
        automatons: [...state.automatons, newAutomaton],
        activeTabId: newAutomaton.id
      }
    }),

  setActiveTab: (id) => set({ activeTabId: id }),

  setMode: (mode) =>
    set({
      mode,
      pendingTransitionFrom: undefined
    }),

  addState: (x, y) =>
    set((state) => ({
      automatons: state.automatons.map(a => {
        if (a.id !== state.activeTabId) return a

        const newState: State = {
          id: crypto.randomUUID(),
          label: `q${a.states.length}`,
          x,
          y
        }

        return {
          ...a,
          states: [...a.states, newState]
        }
      })
    })),

  startTransition: (stateId) =>
    set({
      pendingTransitionFrom: stateId
    }),

  finishTransition: (toId) =>
    set((state) => {
      if (!state.pendingTransitionFrom) return state

      return {
        pendingTransitionFrom: undefined,
        mode: 'idle',
        automatons: state.automatons.map(a => {
          if (a.id !== state.activeTabId) return a

          const newTransition: Transition = {
            id: crypto.randomUUID(),
            from: state.pendingTransitionFrom!,
            to: toId
          }

          return {
            ...a,
            transitions: [...a.transitions, newTransition]
          }
        })
      }
    })
}))