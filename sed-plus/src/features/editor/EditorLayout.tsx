import Toolbar from '../../components/Toolbar'
import Canvas from '../canvas/Canvas'
import Tabs from '../tabs/Tabs'
import SimulationPanel from '../../components/SimulationPanel'

export default function EditorLayout() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Toolbar />
      <Tabs />

      <div style={{ flex: 1 }}>
        <Canvas />
      </div>

      <div style={{ height: 200, borderTop: '1px solid #ccc' }}>
        <SimulationPanel />
      </div>
    </div>
  )
}