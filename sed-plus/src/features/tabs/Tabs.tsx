// features/tabs/Tabs.tsx
import { useAppStore } from "../../app/store"

export function Tabs() {
  const { automatons, activeTabId, setActiveTab, addAutomaton } = useAppStore()

  return (
    <div style={{ display: "flex" }}>
      {automatons.map(a => (
        <button
          key={a.id}
          onClick={() => setActiveTab(a.id)}
          style={{ fontWeight: a.id === activeTabId ? "bold" : "normal" }}
        >
          {a.name}
        </button>
      ))}
      <button onClick={addAutomaton}>+</button>
    </div>
  )
}