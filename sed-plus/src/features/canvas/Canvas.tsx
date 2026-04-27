// features/canvas/Canvas.tsx
import ReactFlow, { Background, Controls } from 'reactflow'
import 'reactflow/dist/style.css'

export function Canvas() {
  return (
    <div style={{ height: "600px" }}>
      <ReactFlow nodes={[]} edges={[]}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}