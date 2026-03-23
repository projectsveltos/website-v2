import React, { useMemo } from "react";
import ReactFlow, {
  Background,
  Position,
  Handle,
  BackgroundVariant,
  EdgeLabelRenderer,
  getBezierPath,
} from "reactflow";
import type { Edge, Node, EdgeProps } from "reactflow";
import "reactflow/dist/style.css";

const SveltosLogo = ({
  width = 32,
  height = 34,
}: {
  width?: number;
  height?: number;
}) => (
  <svg width={width} height={height} viewBox="0 0 275 296" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip-sveltos)">
      <path d="M252.987 210.152C251.646 214.968 249.525 219.615 246.758 223.945C241.089 232.837 232.843 240.156 223.342 246.028C215.37 250.949 206.608 255.163 197.433 258.321C196.926 258.458 196.43 258.585 195.923 258.712C196.324 257.972 196.704 257.234 197.074 256.494C212.594 248.742 225.548 237.115 233.751 223.322C239.843 213.078 243.285 201.682 243.95 190.192C244.647 177.962 241.226 166.482 238.133 154.675C240.593 156.787 242.873 159.153 244.963 161.677C248.416 167.824 250.992 174.467 252.734 181.12C255.215 190.646 255.648 200.615 252.987 210.152Z" fill="#009FE3" />
      <path d="M259.142 258.109C258.793 258.774 258.529 259.292 258.244 259.798C256.777 262.524 255.172 265.195 253.23 267.688C252.543 268.565 251.783 269.398 251.065 270.244C250.823 270.528 250.526 270.729 250.189 270.835C239.631 267.709 228.578 267.128 217.312 267.762C208.602 268.258 200.061 269.43 191.594 270.909H190.348C190.032 270.466 189.714 270.022 189.398 269.568C189.609 269.283 189.81 268.987 190.01 268.691C190.443 268.047 190.865 267.403 191.288 266.748C214.409 266.526 236.802 263.2 259.142 258.109Z" fill="#009FE3" />
      <path d="M123.415 217.095C142.923 203.149 159.851 185.746 171.485 164.619C177.156 154.319 181.509 143.285 184.263 131.848C189.72 109.181 188.836 85.4841 183.732 62.8397C180.171 47.0387 174.87 31.2438 167.786 16.6466C163.512 10.6433 158.821 5.01567 153.781 0C160.126 28.0714 167.143 55.3375 165.705 84.4026C164.353 111.724 157.281 138.789 144.775 163.134C123.835 203.9 87.8385 236.708 45.3188 253.783C53.6296 251.368 61.9282 248.841 70.2361 246.323C89.0808 238.804 107.052 228.793 123.415 217.095Z" fill="#1D70B8" />
      <path d="M112.434 148.323C115.468 129.504 113.266 110.243 107.692 92.1014C103.802 79.4442 98.4941 66.8992 91.8072 55.4421C87.9492 50.8159 83.7743 46.5215 79.3518 42.7475C86.2775 65.2346 93.7001 87.0236 94.3425 110.806C94.9472 133.163 90.8721 155.667 82.1975 176.295C67.6732 210.834 40.3786 239.828 6.78418 256.404C13.4079 253.916 20.0152 251.338 26.6304 248.766C41.5224 241.459 55.5462 232.175 68.1548 221.617C83.1873 209.03 95.8997 193.785 104.064 175.836C108.044 167.084 110.904 157.818 112.434 148.323Z" fill="#83CCED" />
    </g>
    <defs>
      <clipPath id="clip-sveltos">
        <rect width="275" height="296" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const HandleStyle = {
  width: 8,
  height: 8,
  background: "#9ca8b3",
  border: "none",
};

const ManagementNode = ({ data }: any) => {
  return (
    <div className="bg-white border border-[#e2e2e2] rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] w-56 font-sans flex flex-col relative text-[#222]">
      <Handle type="source" position={Position.Right} style={HandleStyle} />

      {/* Header */}
      <div className="px-3 py-2 text-[11px] font-semibold border-b border-[#e2e2e2] bg-[#fcfcfc] rounded-t-[10px]">
        {data.label}
      </div>

      {/* Body */}
      <div className="p-4 bg-white flex flex-col gap-4 rounded-b-[10px]">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-[2px] bg-[#ff0071] shadow-sm"></div>
          <span className="text-xs font-medium text-gray-500">
            secret config
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <SveltosLogo width={20} height={20} />
          <span className="font-bold text-lg tracking-tight italic text-blue-600">
            sveltos
          </span>
        </div>
      </div>
    </div>
  );
};

const TenantNode = ({ data }: any) => {
  return (
    <div className="bg-white border border-[#e2e2e2] rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] w-[200px] font-sans flex flex-col relative text-[#222]">
      <Handle type="target" position={Position.Left} style={HandleStyle} />

      {/* Header */}
      <div className="px-3 py-2 text-[11px] font-semibold border-b border-[#e2e2e2] bg-[#fcfcfc] rounded-t-[10px] flex justify-between items-center">
        {data.label}
        {data.label === "GKE cluster" && (
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        )}
      </div>

      {/* Body */}
      <div className="p-3 bg-white flex flex-col gap-3 rounded-b-[10px]">
        <div className="flex items-center gap-2">
          <SveltosLogo width={16} height={16} />
          <span className="text-[11px] font-medium text-gray-600">agent</span>
        </div>

        {data.badges && data.badges.length > 0 && (
          <div className="flex gap-2">
            {data.badges.map((b: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-gray-50 px-1.5 py-0.5 rounded border border-[#f0f0f0]"
              >
                {b === "secret" && (
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#ff0071]" />
                )}
                {b === "pod" && (
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#3b82f6]" />
                )}
                <span className="text-[9px] text-gray-500 font-medium">
                  {b}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Custom Edge with animateMotion + static lock icon ---

// Envelope / message SVG icon that travels along the path
const TravelingMessage = ({ color }: { color: string }) => (
  <g transform="translate(-9, -7)">
    {/* Envelope body */}
    <rect width="18" height="14" rx="2" fill={color} />
    {/* Envelope flap */}
    <polyline points="0,0 9,8 18,0" fill="none" stroke="white" strokeWidth="1.5" />
  </g>
);

// Static lock icon mid-edge (rendered as SVG `foreignObject` via EdgeLabelRenderer)
const LockIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const AnimatedEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}: EdgeProps) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const color = data?.color ?? "#1C70B7";
  const delay = data?.delay ?? "0s";

  return (
    <>
      {/* The edge path itself: give it an ID so animateMotion can reference it */}
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        strokeWidth={2}
        stroke={color}
        fill="none"
        strokeDasharray="6 3"
        opacity={0.6}
      />

      {/* Traveling message (envelope) along the path */}
      <g>
        <TravelingMessage color={color} />
        <animateMotion dur="3s" begin={delay} repeatCount="indefinite" rotate="auto">
          <mpath href={`#${id}`} />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.05;0.95;1"
          dur="3s"
          begin={delay}
          repeatCount="indefinite"
        />
      </g>

      {/* Static lock badge centered on edge via EdgeLabelRenderer */}
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              background: color,
              borderRadius: "50%",
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 0 3px white, 0 0 0 4px ${color}22`,
            }}
          >
            <LockIcon />
          </div>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

const nodeTypes = {
  management: ManagementNode,
  tenant: TenantNode,
};

const edgeTypes = {
  animated: AnimatedEdge,
};

const initialNodes: Node[] = [
  {
    id: "mgmt",
    type: "management",
    position: { x: 50, y: 155 },
    data: { label: "management cluster" },
  },
  {
    id: "eks",
    type: "tenant",
    position: { x: 450, y: 0 },
    data: { label: "EKS cluster", badges: ["secret"] },
  },
  {
    id: "gke",
    type: "tenant",
    position: { x: 450, y: 110 },
    data: { label: "GKE cluster", badges: ["secret", "pod"] },
  },
  {
    id: "onprem",
    type: "tenant",
    position: { x: 450, y: 220 },
    data: { label: "On-Prem cluster", badges: ["secret"] },
  },
  {
    id: "civo",
    type: "tenant",
    position: { x: 450, y: 330 },
    data: { label: "Civo cluster", badges: ["secret"] },
  },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "mgmt", target: "eks", type: "animated", data: { color: "#ff0071", delay: "0s" } },
  { id: "e2", source: "mgmt", target: "gke", type: "animated", data: { color: "#3b82f6", delay: "0.75s" } },
  { id: "e3", source: "mgmt", target: "onprem", type: "animated", data: { color: "#8b5cf6", delay: "1.5s" } },
  { id: "e4", source: "mgmt", target: "civo", type: "animated", data: { color: "#10b981", delay: "2.25s" } },
];

export function DeploymentFlow({ interactive = false }: { interactive?: boolean }) {
  const nodes = useMemo(() => initialNodes, []);
  const edges = useMemo(() => initialEdges, []);

  return (
    <div
      style={{ width: "100%", height: "100%", minHeight: "480px" }}
      className="deployment-flow-wrapper relative overflow-hidden bg-transparent rounded-xl mt-4 md:mt-0"
    >
      {/* Background Soft Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-pink-300/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-300/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-[20%] right-[30%] w-[40%] h-[40%] bg-purple-300/10 rounded-full blur-[60px] pointer-events-none" />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        proOptions={{ hideAttribution: true }}
        nodesDraggable={interactive}
        nodesConnectable={interactive}
        elementsSelectable={interactive}
        panOnDrag={interactive}
        panOnScroll={interactive}
        zoomOnScroll={interactive}
        zoomOnPinch={interactive}
        zoomOnDoubleClick={interactive}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={1.5}
          color="#334155"
        />
      </ReactFlow>
    </div>
  );
}
