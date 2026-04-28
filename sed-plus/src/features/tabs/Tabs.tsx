import { useAppStore } from '../../app/store'

export default function Tabs() {
  const automatons = useAppStore(s => s.automatons)
  const active = useAppStore(s => s.activeTabId)
  const setActive = useAppStore(s => s.setActiveTab)

  return (
    <div style={{ display: 'flex', gap: 8, padding: 8 }}>
      {automatons.map(a => (
        <button
          key={a.id}
          onClick={() => setActive(a.id)}
          style={{
            fontWeight: a.id === active ? 'bold' : 'normal'
          }}
        >
          {a.name}
        </button>
      ))}
    </div>
  )
}