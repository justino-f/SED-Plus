import { State } from './state'
import { Transition } from './transition'
import { Event } from './event'

export interface Automaton {
  id: string
  name: string
  states: State[]
  transitions: Transition[]
  events: Event[]
}