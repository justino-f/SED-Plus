// features/editor/EditorLayout.tsx
import { Tabs } from "../tabs/Tabs"
import { Canvas } from "../canvas/Canvas"
import { Toolbar } from "../../components/Toolbar"
import { SimulationPanel } from "../../components/SimulationPanel"

export function EditorLayout() {
  return (
    <div>
      <Tabs />
      <Toolbar />
      <Canvas />
      <SimulationPanel />
    </div>
  )
}