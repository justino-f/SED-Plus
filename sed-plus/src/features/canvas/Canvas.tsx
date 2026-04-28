import React from 'react'
import ReactFlow, { Background, Controls } from 'reactflow'
import 'reactflow/dist/style.css'
import { useAppStore } from '../../app/store'

export default function Canvas() {
  const automaton = useAppStore(s => s.getActiveAutomaton())
  const addState = useAppStore(s => s.addState)
  const mode = useAppStore(s => s.mode)
  const startTransition = useAppStore(s => s.startTransition)
  const finishTransition = useAppStore(s => s.finishTransition)
  const pending = useAppStore(s => s.pendingTransitionFrom)

  const nodes = automaton?.states.map(s => ({
    id: s.id,
    position: { x: s.x, y: s.y },
    data: { label: s.label }
  })) ?? []

  const edges = automaton?.transitions.map(t => ({
    id: t.id,
    source: t.from,
    target: t.to
  })) ?? []

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onPaneClick={(e) => {
          if (mode === 'add_state') {
            addState(e.clientX, e.clientY)
          }
        }}
        onNodeClick={(_, node) => {
          if (mode === 'add_transition') {
            if (!pending) {
              startTransition(node.id)
            } else {
              finishTransition(node.id)
            }
          }
        }}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}