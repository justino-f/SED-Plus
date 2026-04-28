import { useAppStore } from '../app/store'

export default function SimulationPanel() {
  const automaton = useAppStore(s => s.getActiveAutomaton())

  return (
    <div style={{ padding: 8 }}>
      <h3>Simulation</h3>
      <pre>
        {JSON.stringify(automaton, null, 2)}
      </pre>
    </div>
  )
}