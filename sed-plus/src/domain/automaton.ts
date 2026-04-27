

export interface Automaton {
  id: string
  name: string
  states: State[]
  events: Event[]
  transitions: Transition[]
  initialStateId?: string
}

