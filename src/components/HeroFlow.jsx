import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
  BaseEdge,
  getBezierPath,
  MarkerType
} from 'reactflow';

import 'reactflow/dist/style.css';

// Custom Node Component
const CustomNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-xl bg-white border border-gray-200 min-w-[160px] text-center transition-all hover:shadow-xl hover:border-blue-400">
        <div className="font-bold text-gray-800 text-sm">{data.label}</div>
        {data.subLabel && <div className="text-xs text-gray-500 mt-1">{data.subLabel}</div>}
        
        <Handle type="target" position={Position.Top} className="!bg-gray-400 !w-2 !h-2" />
        <Handle type="source" position={Position.Bottom} className="!bg-gray-400 !w-2 !h-2" />
    </div>
  );
};

// Custom Edge Component with moving particle
const CustomEdge = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      <circle r="4" fill="#3b82f6">
        <animateMotion dur="2s" repeatCount="indefinite" path={edgePath} />
      </circle>
    </>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

const initialNodes = [
  { 
    id: '1', 
    type: 'custom', 
    position: { x: 250, y: 0 }, 
    data: { label: 'Management Cluster', subLabel: 'Sveltos Controller' } 
  },
  { 
    id: '2', 
    type: 'custom', 
    position: { x: 100, y: 150 }, 
    data: { label: 'Managed Cluster 1', subLabel: 'Production' } 
  },
  { 
    id: '3', 
    type: 'custom', 
    position: { x: 400, y: 150 }, 
    data: { label: 'Managed Cluster 2', subLabel: 'Staging' } 
  },
  { 
    id: '4', 
    type: 'custom', 
    position: { x: 100, y: 300 }, 
    data: { label: 'Add-ons', subLabel: 'Prometheus, Nginx' } 
  },
   { 
    id: '5', 
    type: 'custom', 
    position: { x: 400, y: 300 }, 
    data: { label: 'Add-ons', subLabel: 'Kyverno, Fluentbit' } 
  },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', type: 'custom', style: { stroke: '#b1b1b7', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#b1b1b7' } },
    { id: 'e1-3', source: '1', target: '3', type: 'custom', style: { stroke: '#b1b1b7', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#b1b1b7' } },
    { id: 'e2-4', source: '2', target: '4', type: 'custom', style: { stroke: '#b1b1b7', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#b1b1b7' } },
    { id: 'e3-5', source: '3', target: '5', type: 'custom', style: { stroke: '#b1b1b7', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#b1b1b7' } }
];

const proOptions = { hideAttribution: true };

export default function HeroFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <style>
        {`.react-flow__attribution { display: none !important; }`}
      </style>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        proOptions={proOptions}
        fitView
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        panOnDrag={false}
      >
        <Background variant="dots" gap={12} size={1} color="#e5e7eb" />
      </ReactFlow>
    </div>
  );
}
