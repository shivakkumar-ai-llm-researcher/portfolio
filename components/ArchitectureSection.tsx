'use client';

import React, { useState } from 'react';
import {
  Layers,
  Cpu,
  Bot,
  Server,
  Smartphone,
  ArrowRight
} from 'lucide-react';

interface Layer {
  number: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  summary: string;
  techs: string[];
  specs: { title: string; desc: string }[];
}

const architectureLayers: Layer[] = [
  {
    number: '01',
    name: 'Foundation Model Layer',
    subtitle: 'From Mathematical Equations to Weights',
    icon: <Cpu className="w-5 h-5 text-brand-500" />,
    color: 'text-brand-500',
    borderColor: 'border-brand-500/40',
    summary:
      'Implementing neural architectures from first principles rather than treating them as black-box APIs. Building custom attention layers, pruning redundant parameter weights, and tuning specialized LoRA adapters.',
    techs: ['RoPE', 'RMSNorm', 'SwiGLU', 'Grouped-Query Attention (GQA)', 'QLoRA 4-bit', 'ONNX Runtime'],
    specs: [
      {
        title: '795M Parameter Pruning',
        desc: 'Derived from Qwen2.5-Coder-1.5B via stride sampling to fit comfortably in 2GB VRAM.',
      },
      {
        title: '12 Domain LoRA Adapters',
        desc: 'Individual low-rank adapters fine-tuned for specialized frameworks, easily mergeable into standalone checkpoints.',
      },
      {
        title: 'On-Device ONNX Acceleration',
        desc: 'Graph optimization and quantization for lightning-fast sub-50ms token inference directly on laptops and mobile devices.',
      },
    ],
  },
  {
    number: '02',
    name: 'Agentic & Fin360 Optimization Layer',
    subtitle: 'Autonomous Reasoning & Cost Efficiency',
    icon: <Bot className="w-5 h-5 text-sapphire" />,
    color: 'text-sapphire',
    borderColor: 'border-sapphire/40',
    summary:
      'The reasoning spine. Multi-agent state machines that break requests into parallel sub-tasks, execute tools with self-correcting validation loops, and run through the Fin360 framework to cut inference bills by 74%.',
    techs: ['LangGraph', 'LangChain', 'Fin360 Cost Gateway', 'Redis Semantic Cache', 'Claude API', 'Groq Fallback'],
    specs: [
      {
        title: 'LangGraph State Machines',
        desc: 'Cyclic graph workflows with supervisor agents, planning trees, and automated human-in-the-loop validation.',
      },
      {
        title: 'Semantic Prompt Cache (<45ms)',
        desc: 'Redis vector index that catches recurring queries and returns cached responses without making upstream LLM calls.',
      },
      {
        title: 'Smart Model Tier Routing',
        desc: 'Directs basic intent queries to fast open-source models (Groq Llama-3) and reserves frontier models (Claude 3.5 Sonnet) for deep synthesis.',
      },
    ],
  },
  {
    number: '03',
    name: 'Enterprise Backend & Data Layer',
    subtitle: 'Distributed Ingestion & Resilient Services',
    icon: <Server className="w-5 h-5 text-coral" />,
    color: 'text-coral',
    borderColor: 'border-coral/40',
    summary:
      'High-throughput distributed systems capable of ingesting dozens of live signal feeds, running asynchronous jobs, and managing complex multi-tenant enterprise data schemas.',
    techs: ['Django REST Framework', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'crawl4ai', 'Playwright'],
    specs: [
      {
        title: '35+ Signal Ingestion Feeds',
        desc: 'Parallel Celery scraping workers tracking tender awards, leadership hiring, and funding events across India & KSA.',
      },
      {
        title: 'Socket SMTP Handshake',
        desc: 'Direct socket-level verification of recipient mail servers to guarantee zero email bounces without sending spam.',
      },
      {
        title: 'Multi-Tenant Security & Compliance',
        desc: 'Tenant isolation, CR identity verification, Arabic character encoding normalization, and Hijri date translation.',
      },
    ],
  },
  {
    number: '04',
    name: 'Client & Mobile Edge Layer',
    subtitle: 'Offline-First Apps & User Interfaces',
    icon: <Smartphone className="w-5 h-5 text-amber" />,
    color: 'text-amber',
    borderColor: 'border-amber/40',
    summary:
      'The physical surface users touch. Cross-platform React Native and Android Jetpack Compose applications built for field personnel operating under erratic network conditions.',
    techs: ['React Native', 'Jetpack Compose (Kotlin)', 'Zustand', 'AsyncStorage', 'Biometric Vision', 'TypeScript'],
    specs: [
      {
        title: 'Offline-First Reconciliation',
        desc: 'Local-first state with Zustand and optimistic updates, automatically syncing back to the cloud once network restores.',
      },
      {
        title: 'Touchless Biometric Auth',
        desc: 'On-device facial recognition and anti-spoof liveness verification for Firstclick HRMS attendance recording.',
      },
      {
        title: 'Dynamic Tenant Feature Flags',
        desc: 'Dynamic UI rendering based on enterprise organization tier, role-based access, and regional feature sets.',
      },
    ],
  },
];

export default function ArchitectureSection() {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const activeLayer = architectureLayers[selectedLayerIndex];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl clay-brand font-mono text-xs font-semibold mb-3">
          <span>03 · FULL-STACK AI TOPOLOGY</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight max-w-3xl">
          Four interconnected layers. Zero black boxes.
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          How I architect enterprise AI solutions from mathematical model weights through autonomous agents, resilient backend services, and native mobile frontends.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Layer Selection Buttons (Tactile Clay Cards) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {architectureLayers.map((layer, idx) => {
            const isSelected = selectedLayerIndex === idx;
            return (
              <button
                key={layer.number}
                onClick={() => setSelectedLayerIndex(idx)}
                className={`w-full p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between ${
                  isSelected
                    ? `clay-card border-2 ${layer.borderColor} shadow-lg`
                    : 'glass-panel opacity-80 hover:opacity-100 hover:-translate-y-1'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl clay-btn flex items-center justify-center">
                    {layer.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-mono text-[11px] text-slate-400">LAYER {layer.number}</span>
                      <span className={`font-mono text-[10px] font-bold ${layer.color}`}>SELECTED</span>
                    </div>
                    <h3 className="font-display font-semibold text-slate-900 dark:text-white text-base">{layer.name}</h3>
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-400">{layer.subtitle}</p>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-brand-500 translate-x-1' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </div>

        {/* Layer Deep Dive View (Frosted Glass Panel) */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 rounded-2xl shadow-xl relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-white/[0.08] mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl clay-btn flex items-center justify-center">
                  {activeLayer.icon}
                </div>
                <div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 block">LAYER {activeLayer.number} ARCHITECTURE</span>
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">{activeLayer.name}</h3>
                </div>
              </div>
            </div>

            {/* Narrative Summary */}
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-8">
              {activeLayer.summary}
            </p>

            {/* Specifications (Clay Cards) */}
            <div className="space-y-4 mb-8">
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-semibold">Key Technical Implementations:</span>
              <div className="space-y-3">
                {activeLayer.specs.map((spec) => (
                  <div
                    key={spec.title}
                    className="p-4 rounded-xl clay-card"
                  >
                    <h4 className="font-display font-semibold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${activeLayer.color.replace('text-', 'bg-')}`} />
                      {spec.title}
                    </h4>
                    <p className="font-mono text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-4">
                      {spec.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Layer Tech Chips */}
            <div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3 font-semibold">Technologies in Layer:</span>
              <div className="flex flex-wrap gap-2">
                {activeLayer.techs.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1 rounded-lg glass-pill text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
