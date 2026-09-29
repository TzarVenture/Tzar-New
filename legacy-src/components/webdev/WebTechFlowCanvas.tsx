'use client';

import React, { useState, useMemo, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Handle,
  Position,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Terminal, Zap } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   01. FRAMEWORK DATA & CODE SNIPPETS
────────────────────────────────────────────────────────────────────────── */
export type TechFrameworkId = 'nextjs' | 'react' | 'tailwind' | 'wordpress' | 'shopify';

interface TechSpec {
  id: TechFrameworkId;
  name: string;
  borderColor: string;
  fileName: string;
  perfStat: string;
  codeSnippet: string[];
}

const TECH_SPECS: Record<TechFrameworkId, TechSpec> = {
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    borderColor: 'rgba(255, 255, 255, 0.35)',
    fileName: 'app/architecture/page.tsx',
    perfStat: '100% Core Web Vitals',
    codeSnippet: [
      '// Next.js 15 App Router Architecture',
      'export default async function FlagshipPage() {',
      '  const catalog = await getFastCatalog();',
      '  return (',
      '    <Suspense fallback={<ShimmerSkeleton />}>',
      '      <HydratedStorefront catalog={catalog} />',
      '    </Suspense>',
      '  );',
      '}',
    ],
  },
  react: {
    id: 'react',
    name: 'React',
    borderColor: 'rgba(97, 218, 251, 0.4)',
    fileName: 'components/core/InteractiveState.tsx',
    perfStat: '60 FPS Transitions',
    codeSnippet: [
      '// React 19 Action & Transition Pipeline',
      'const [optimisticCart, setOptimistic] =',
      '  useOptimistic(cart, (state, item) => [',
      '    ...state, item',
      '  ]);',
      '',
      'const [isPending, startTransition] = useTransition();',
    ],
  },
  tailwind: {
    id: 'tailwind',
    name: 'Tailwind CSS',
    borderColor: 'rgba(56, 189, 248, 0.4)',
    fileName: 'styles/luxury-system.css',
    perfStat: 'Zero Runtime CSS',
    codeSnippet: [
      '/* Tailwind v4 Luxury Design Tokens */',
      '@theme {',
      '  --color-racing-green: #1D4224;',
      '  --color-amber-gold: #FFAE00;',
      '  --color-obsidian-deep: #050B07;',
      '  --font-display: Montserrat, sans-serif;',
      '}',
    ],
  },
  shopify: {
    id: 'shopify',
    name: 'Shopify',
    borderColor: 'rgba(34, 197, 94, 0.4)',
    fileName: 'templates/product-flagship.liquid',
    perfStat: 'Instant Checkout Engine',
    codeSnippet: [
      '// Shopify Storefront GraphQL & Liquid',
      '{% section "high-converting-pdp" %}',
      'const { checkout } = await shopify.mutation({',
      '  lines: [{ merchandiseId, quantity: 1 }],',
      '  discountCodes: ["TZARVIP"]',
      '});',
      'window.location.href = checkout.webUrl;',
    ],
  },
  wordpress: {
    id: 'wordpress',
    name: 'WordPress',
    borderColor: 'rgba(56, 189, 248, 0.4)',
    fileName: 'cms/graphql-connector.ts',
    perfStat: 'Headless Freedom',
    codeSnippet: [
      '// Headless WordPress REST & GraphQL API',
      'export async function getCorporateArticles() {',
      '  const query = gql`',
      '    query GetPublishedPosts {',
      '      posts(where: { status: PUBLISH }) {',
      '        nodes { title, slug, uri }',
      '      }',
      '    }',
      '  `;',
      '  return await wpClient.request(query);',
      '}',
    ],
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   02. REAL AUTHENTIC TECHNOLOGY SVG ICONS
────────────────────────────────────────────────────────────────────────── */
const NextJsIcon = () => (
  <svg viewBox="0 0 180 180" className="w-5 h-5 shrink-0" fill="none">
    <circle cx="90" cy="90" r="90" fill="#000000" />
    <path
      d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
      fill="url(#next_icon_g1)"
    />
    <rect x="115" y="54" width="12" height="72" fill="url(#next_icon_g2)" />
    <defs>
      <linearGradient id="next_icon_g1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="next_icon_g2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 shrink-0">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-[#38BDF8]">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const WordPressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-[#21759B]">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm-1.077 18.423L7.14 8.797c.563-.03 1.096-.089 1.096-.089.475-.059.416-.772-.06-.743 0 0-1.424.119-2.344.119-.119 0-.267 0-.416-.03A10.33 10.33 0 0 1 12 1.688c2.43 0 4.658.832 6.435 2.228-.089.03-.178.059-.267.059-1.008 0-1.72.861-1.72 1.81 0 .743.416 1.396.861 2.167.356.624.772 1.396.772 2.523 0 1.128-.416 2.463-.861 4.156l-3.324 9.943c-.03.059-.06.119-.089.178A10.276 10.276 0 0 1 12 22.312c-.386 0-.772-.03-1.146-.089l.069-.214zm9.35-6.423c0-2.435-.861-4.127-1.602-5.404-.593-1.008-1.157-1.84-1.157-2.82 0-1.097.832-2.108 2.019-2.108.06 0 .119 0 .178.03A10.264 10.264 0 0 1 22.312 12c0 2.998-1.277 5.702-3.324 7.603l1.246-3.71c.624-1.78.793-3.235.793-4.293zM1.688 12c0 1.93.535 3.737 1.455 5.285l4.335-12.556C4.417 5.674 1.688 8.524 1.688 12zm7.662 9.588l-3.77-10.953 3.65 10.656c.03.09.06.208.12.297z" />
  </svg>
);

const ShopifyIcon = () => (
  <img
    src="/assets/images/icons/shopify2.png"
    alt="Shopify"
    className="w-5 h-5 object-contain shrink-0"
  />
);

/* ──────────────────────────────────────────────────────────────────────────
   03. CUSTOM REACTFLOW NODES
────────────────────────────────────────────────────────────────────────── */

// Central Browser / IDE Hub Node (Scrollbar completely removed)
const TerminalNode = ({ data }: any) => {
  const currentSpec: TechSpec = data.currentSpec;

  return (
    <div className="w-[280px] sm:w-[310px] rounded-2xl bg-[#07130A]/95 border border-[#22C55E]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden text-white font-mono select-none">
      {/* Target Handles */}
      <Handle type="target" position={Position.Top} id="top" className="!bg-[#22C55E] !w-2 !h-2" />
      <Handle type="target" position={Position.Left} id="left" className="!bg-[#22C55E] !w-2 !h-2" />
      <Handle type="target" position={Position.Right} id="right" className="!bg-[#22C55E] !w-2 !h-2" />
      <Handle type="target" position={Position.Bottom} id="bottom" className="!bg-[#22C55E] !w-2 !h-2" />

      {/* macOS Chrome Header Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#0E2015] border-b border-[#22C55E]/20">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
        </div>
        <div className="flex items-center gap-1 text-[10px] text-white/60 truncate max-w-[140px]">
          <Terminal className="w-3 h-3 text-[#FFAE00]" />
          <span>{currentSpec.fileName}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-[9px] font-sans font-bold text-[#22C55E] uppercase tracking-wider">
            Live
          </span>
        </div>
      </div>

      {/* Performance Spec Ribbon */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#050B07] border-b border-white/5 text-[10px]">
        <span className="text-[#FFAE00] font-sans font-bold uppercase tracking-wider flex items-center gap-1">
          <Zap className="w-3 h-3" />
          {currentSpec.perfStat}
        </span>
      </div>

      {/* Syntax Code Lines (Scrollbar completely hidden) */}
      <div className="p-3 text-[10.5px] leading-relaxed overflow-hidden font-mono bg-[#07130A] scrollbar-none [&::-webkit-scrollbar]:hidden">
        {currentSpec.codeSnippet.map((line, idx) => (
          <div key={idx} className="flex gap-2.5">
            <span className="text-white/20 select-none text-[9px] w-3 text-right">{idx + 1}</span>
            <span
              className={
                line.startsWith('//') || line.startsWith('/*') || line.endsWith('*/')
                  ? 'text-[#6EE7B7]/70 italic'
                  : line.includes('function') || line.includes('const') || line.includes('export')
                  ? 'text-[#F43F5E]'
                  : line.includes('return') || line.includes('await')
                  ? 'text-[#38BDF8]'
                  : line.includes('<') || line.includes('>')
                  ? 'text-[#FFAE00]'
                  : 'text-white/90'
              }
            >
              {line}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Tech Card Node: Shows ONLY Real Icon + Technology Name
const TechNode = ({ data }: any) => {
  const spec: TechSpec = data.spec;
  const isSelected: boolean = data.isSelected;
  const onSelect: (id: TechFrameworkId) => void = data.onSelect;

  const renderIcon = () => {
    switch (spec.id) {
      case 'nextjs':
        return <NextJsIcon />;
      case 'react':
        return <ReactIcon />;
      case 'tailwind':
        return <TailwindIcon />;
      case 'shopify':
        return <ShopifyIcon />;
      case 'wordpress':
        return <WordPressIcon />;
      default:
        return null;
    }
  };

  return (
    <div
      onClick={() => onSelect(spec.id)}
      style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
      }}
      className={`relative px-3.5 py-2 rounded-xl bg-[#09140E]/95 backdrop-blur-md transition-all duration-200 cursor-pointer select-none group hover:scale-105 flex items-center gap-2.5 ${
        isSelected
          ? 'border-2 border-[#FFAE00] -translate-y-0.5'
          : 'border border-white/15 hover:border-white/40'
      }`}
    >
      {/* Source Handles */}
      <Handle type="source" position={Position.Top} id="top" className="!bg-[#FFAE00] !w-1.5 !h-1.5" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="!bg-[#FFAE00] !w-1.5 !h-1.5" />
      <Handle type="source" position={Position.Left} id="left" className="!bg-[#FFAE00] !w-1.5 !h-1.5" />
      <Handle type="source" position={Position.Right} id="right" className="!bg-[#FFAE00] !w-1.5 !h-1.5" />

      {/* Real Brand Icon */}
      <div className="shrink-0 flex items-center justify-center">
        {renderIcon()}
      </div>

      {/* Technology Name Only (No short description) */}
      <span className="font-montserrat font-bold text-xs text-white tracking-wide whitespace-nowrap">
        {spec.name}
      </span>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   04. MAIN COMPONENT: WebTechFlowCanvas
   No parent background color, no container box appearance.
────────────────────────────────────────────────────────────────────────── */
interface WebTechFlowCanvasProps {
  className?: string;
}

export default function WebTechFlowCanvas({ className = '' }: WebTechFlowCanvasProps) {
  const [selectedTech, setSelectedTech] = useState<TechFrameworkId>('nextjs');

  const handleSelectTech = useCallback((id: TechFrameworkId) => {
    setSelectedTech(id);
  }, []);

  const nodeTypes = useMemo(
    () => ({
      terminalNode: TerminalNode,
      techNode: TechNode,
    }),
    []
  );

  const initialNodes: Node[] = useMemo(
    () => [
      // Central Terminal Hub (center)
      {
        id: 'hub',
        type: 'terminalNode',
        position: { x: 185, y: 90 },
        data: {
          currentSpec: TECH_SPECS[selectedTech],
        },
        draggable: true,
      },
      // Top Node: Next.js
      {
        id: 'nextjs',
        type: 'techNode',
        position: { x: 275, y: 5 },
        data: {
          spec: TECH_SPECS.nextjs,
          isSelected: selectedTech === 'nextjs',
          onSelect: handleSelectTech,
        },
        draggable: true,
      },
      // Top Left Node: React
      {
        id: 'react',
        type: 'techNode',
        position: { x: 10, y: 55 },
        data: {
          spec: TECH_SPECS.react,
          isSelected: selectedTech === 'react',
          onSelect: handleSelectTech,
        },
        draggable: true,
      },
      // Top Right Node: Tailwind CSS
      {
        id: 'tailwind',
        type: 'techNode',
        position: { x: 550, y: 55 },
        data: {
          spec: TECH_SPECS.tailwind,
          isSelected: selectedTech === 'tailwind',
          onSelect: handleSelectTech,
        },
        draggable: true,
      },
      // Bottom Left Node: WordPress
      {
        id: 'wordpress',
        type: 'techNode',
        position: { x: 10, y: 280 },
        data: {
          spec: TECH_SPECS.wordpress,
          isSelected: selectedTech === 'wordpress',
          onSelect: handleSelectTech,
        },
        draggable: true,
      },
      // Bottom Right Node: Shopify (Spaced generously away from terminal right edge)
      {
        id: 'shopify',
        type: 'techNode',
        position: { x: 550, y: 280 },
        data: {
          spec: TECH_SPECS.shopify,
          isSelected: selectedTech === 'shopify',
          onSelect: handleSelectTech,
        },
        draggable: true,
      },
    ],
    [selectedTech, handleSelectTech]
  );

  const initialEdges: Edge[] = useMemo(
    () => [
      {
        id: 'e-nextjs-hub',
        source: 'nextjs',
        sourceHandle: 'bottom',
        target: 'hub',
        targetHandle: 'top',
        animated: true,
        type: ConnectionLineType.SmoothStep,
        style: {
          stroke: selectedTech === 'nextjs' ? '#FFAE00' : 'rgba(255, 255, 255, 0.45)',
          strokeWidth: selectedTech === 'nextjs' ? 2.5 : 1.5,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: selectedTech === 'nextjs' ? '#FFAE00' : 'rgba(255, 255, 255, 0.45)',
          width: 14,
          height: 14,
        },
      },
      {
        id: 'e-react-hub',
        source: 'react',
        sourceHandle: 'right',
        target: 'hub',
        targetHandle: 'left',
        animated: true,
        type: ConnectionLineType.Bezier,
        style: {
          stroke: selectedTech === 'react' ? '#FFAE00' : 'rgba(97, 218, 251, 0.45)',
          strokeWidth: selectedTech === 'react' ? 2.5 : 1.5,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: selectedTech === 'react' ? '#FFAE00' : 'rgba(97, 218, 251, 0.45)',
          width: 14,
          height: 14,
        },
      },
      {
        id: 'e-tailwind-hub',
        source: 'tailwind',
        sourceHandle: 'left',
        target: 'hub',
        targetHandle: 'right',
        animated: true,
        type: ConnectionLineType.Bezier,
        style: {
          stroke: selectedTech === 'tailwind' ? '#FFAE00' : 'rgba(56, 189, 248, 0.45)',
          strokeWidth: selectedTech === 'tailwind' ? 2.5 : 1.5,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: selectedTech === 'tailwind' ? '#FFAE00' : 'rgba(56, 189, 248, 0.45)',
          width: 14,
          height: 14,
        },
      },
      {
        id: 'e-wordpress-hub',
        source: 'wordpress',
        sourceHandle: 'right',
        target: 'hub',
        targetHandle: 'left',
        animated: true,
        type: ConnectionLineType.Bezier,
        style: {
          stroke: selectedTech === 'wordpress' ? '#FFAE00' : 'rgba(56, 189, 248, 0.45)',
          strokeWidth: selectedTech === 'wordpress' ? 2.5 : 1.5,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: selectedTech === 'wordpress' ? '#FFAE00' : 'rgba(56, 189, 248, 0.45)',
          width: 14,
          height: 14,
        },
      },
      {
        id: 'e-shopify-hub',
        source: 'shopify',
        sourceHandle: 'left',
        target: 'hub',
        targetHandle: 'right',
        animated: true,
        type: ConnectionLineType.Bezier,
        style: {
          stroke: selectedTech === 'shopify' ? '#FFAE00' : 'rgba(34, 197, 94, 0.45)',
          strokeWidth: selectedTech === 'shopify' ? 2.5 : 1.5,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: selectedTech === 'shopify' ? '#FFAE00' : 'rgba(34, 197, 94, 0.45)',
          width: 14,
          height: 14,
        },
      },
    ],
    [selectedTech]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  React.useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === 'hub') {
          return {
            ...node,
            data: { currentSpec: TECH_SPECS[selectedTech] },
          };
        }
        return {
          ...node,
          data: {
            ...node.data,
            isSelected: node.id === selectedTech,
          },
        };
      })
    );
    setEdges(initialEdges);
  }, [selectedTech, initialEdges, setNodes, setEdges]);

  return (
    <div className={`w-full relative select-none ${className}`}>
      {/* 
        Borderless, Container-less Canvas Area:
        No parent background color, no enclosing box border or card shadow.
      */}
      <div className="w-full h-[330px] sm:h-[360px] md:h-[380px] relative bg-transparent">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          proOptions={{ hideAttribution: true }}
          fitView
          fitViewOptions={{ padding: 0.12 }}
          panOnDrag={false}
          zoomOnScroll={false}
          preventScrolling={false}
          nodesDraggable={true}
          elementsSelectable={true}
          className="react-flow-tech-canvas bg-transparent [&_.react-flow__attribution]:!hidden"
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={22}
            size={1.1}
            color="rgba(34, 197, 94, 0.15)"
          />
        </ReactFlow>
      </div>
    </div>
  );
}
