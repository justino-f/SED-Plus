import { useAppStore } from '../app/store'

export default function Toolbar() {
  const setMode = useAppStore(s => s.setMode)
  const addAutomaton = useAppStore(s => s.addAutomaton)

  return (
    <div style={{ display: 'flex', gap: 8, padding: 8 }}>
      <button onClick={addAutomaton}>New Automaton</button>
      <button onClick={() => setMode('add_state')}>Add State</button>
      <button onClick={() => setMode('add_transition')}>Add Transition</button>
      <button onClick={() => setMode('idle')}>Idle</button>
    </div>
  )
}