'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MotionReveal } from './MotionPrimitives';
import {
  Terminal,
  Star,
  Layers,
  Brain,
  FolderGit2,
  Cpu,
  Mail,
  RotateCcw,
  Send
} from 'lucide-react';

interface TerminalLine {
  id: number;
  type: 'command' | 'output';
  command?: string;
  title?: string;
  segments?: { text: string; color?: string; bold?: boolean }[];
}

const WELCOME_LINES: TerminalLine[] = [
  {
    id: 1,
    type: 'output',
    segments: [
      { text: 'Hey there! Welcome to my interactive developer terminal.', color: 'text-emerald-400', bold: true },
    ],
  },
  {
    id: 2,
    type: 'output',
    segments: [
      { text: "Ask anything about my production AI work. Type ", color: 'text-slate-300' },
      { text: "'help'", color: 'text-sky-400', bold: true },
      { text: ' to see all commands, or ask a question like ', color: 'text-slate-300' },
      { text: '"Why should we hire you?"', color: 'text-amber-300' },
      { text: ' or ', color: 'text-slate-300' },
      { text: '"Tell me about Fin360"', color: 'text-amber-300' },
      { text: '.', color: 'text-slate-300' },
    ],
  },
];

function buildResponse(rawInput: string): { title?: string; segments: { text: string; color?: string; bold?: boolean }[] } {
  const q = rawInput.trim().toLowerCase();

  if (q === 'help' || q === '?') {
    return {
      title: 'AVAILABLE COMMANDS',
      segments: [
        { text: '  hire       ', color: 'text-amber-400', bold: true },
        { text: '— 60-second executive pitch & interview fit\n', color: 'text-slate-300' },
        { text: '  skills     ', color: 'text-emerald-400', bold: true },
        { text: '— Core AI/ML, Agentic, Backend & Mobile stack\n', color: 'text-slate-300' },
        { text: '  ai         ', color: 'text-sky-400', bold: true },
        { text: '— LangGraph, Multi-Agent Systems, RAG & RL details\n', color: 'text-slate-300' },
        { text: '  fin360     ', color: 'text-violet-400', bold: true },
        { text: '— Fin360 AI inference & cloud cost optimization\n', color: 'text-slate-300' },
        { text: '  projects   ', color: 'text-rose-400', bold: true },
        { text: '— Production systems & Credit Risk ML pipeline\n', color: 'text-slate-300' },
        { text: '  contact    ', color: 'text-cyan-400', bold: true },
        { text: '— Location (Cuddalore), preferred cities & email\n', color: 'text-slate-300' },
        { text: '  clear      ', color: 'text-slate-400', bold: true },
        { text: '— Reset terminal output', color: 'text-slate-300' },
      ],
    };
  }

  if (q === 'hire' || q.includes('hire') || q.includes('pitch') || q.includes('fit') || q.includes('why')) {
    return {
      title: '★ WHY HIRE ME? (60-SECOND EXECUTIVE PITCH)',
      segments: [
        { text: '1. Production Agentic AI: ', color: 'text-emerald-400', bold: true },
        { text: 'I design autonomous multi-agent workflows in LangGraph, LangChain & AutoGen that reason, plan, call tools, and self-correct in real enterprise environments.\n', color: 'text-slate-300' },
        { text: '2. FinOps & Cost Efficiency: ', color: 'text-sky-400', bold: true },
        { text: 'Core contributor to the Fin360 framework at Coolgen Solutions — reducing LLM & cloud inference spend via Redis semantic caching and smart model routing.\n', color: 'text-slate-300' },
        { text: '3. Full-Stack & Mobile Execution: ', color: 'text-indigo-400', bold: true },
        { text: 'From XGBoost credit risk models (Gini-evaluated at Rubixe AI) to Django REST APIs and React Native / Android mobile apps.\n', color: 'text-slate-300' },
        { text: '4. Location & Readiness: ', color: 'text-violet-400', bold: true },
        { text: 'Based in Cuddalore, India and open to roles in Chennai, Hyderabad & Bangalore.', color: 'text-slate-300' },
      ],
    };
  }

  if (q === 'skills' || q.includes('stack') || q.includes('tech')) {
    return {
      title: '⚡ TECHNICAL STACK & TOP SKILLS',
      segments: [
        { text: '• Agentic & LLM: ', color: 'text-sky-400', bold: true },
        { text: 'LangGraph, LangChain, AutoGen, RAG & Vector Search, Prompt Engineering\n', color: 'text-slate-300' },
        { text: '• ML & Analytics: ', color: 'text-amber-400', bold: true },
        { text: 'XGBoost, Scikit-Learn, PyTorch, Reinforcement Learning, Feature Engineering\n', color: 'text-slate-300' },
        { text: '• Backend & FinOps: ', color: 'text-emerald-400', bold: true },
        { text: 'Python, Django REST Framework, FastAPI, Redis, Fin360 Framework\n', color: 'text-slate-300' },
        { text: '• Mobile & Web: ', color: 'text-violet-400', bold: true },
        { text: 'React Native, Android Development, Next.js & TypeScript, WordPress Development', color: 'text-slate-300' },
      ],
    };
  }

  if (q === 'ai' || q.includes('langgraph') || q.includes('langchain') || q.includes('agent') || q.includes('rag') || q.includes('autogen')) {
    return {
      title: '🧠 AGENTIC AI & ORCHESTRATION ARCHITECTURE',
      segments: [
        { text: '• Supervisor State Graphs: ', color: 'text-sky-400', bold: true },
        { text: 'Cyclic multi-agent graphs in LangGraph with conditional routing, tool execution, state persistence, and human-in-the-loop checkpoints.\n', color: 'text-slate-300' },
        { text: '• RAG & Memory: ', color: 'text-emerald-400', bold: true },
        { text: 'Dense/sparse retrieval pipelines backed by Redis semantic caching and structured JSON guardrails.\n', color: 'text-slate-300' },
        { text: '• Thought Leadership: ', color: 'text-violet-400', bold: true },
        { text: 'Published technical articles on Medium breaking down multi-agent architectures for practitioners.', color: 'text-slate-300' },
      ],
    };
  }

  if (q === 'fin360' || q.includes('fin360') || q.includes('cost') || q.includes('cache') || q.includes('redis')) {
    return {
      title: '☁️ FIN360 — AI INFERENCE & CLOUD COST OPTIMIZATION',
      segments: [
        { text: '• Semantic Prompt Caching: ', color: 'text-emerald-400', bold: true },
        { text: 'Uses Redis vector similarity to serve repeated enterprise LLM queries with sub-millisecond cache hits.\n', color: 'text-slate-300' },
        { text: '• Dynamic Model Tier Routing: ', color: 'text-sky-400', bold: true },
        { text: 'Routes lightweight classification/extraction tasks to compact models while reserving frontier LLMs for complex reasoning.\n', color: 'text-slate-300' },
        { text: '• Context Pruning: ', color: 'text-amber-400', bold: true },
        { text: 'Trims redundant retrieval tokens before prompt assembly to cut token bills without sacrificing accuracy.', color: 'text-slate-300' },
      ],
    };
  }

  if (q === 'projects' || q.includes('project') || q.includes('rubixe') || q.includes('credit') || q.includes('mobile') || q.includes('experience')) {
    return {
      title: '🚀 PRODUCTION PROJECTS & EXPERIENCE',
      segments: [
        { text: '1. Coolgen Solutions (Associate Engineer, Jan 2026–Present): ', color: 'text-sky-400', bold: true },
        { text: 'Enterprise agentic workflows (LangGraph/LangChain) & Fin360 AI cost optimization framework.\n', color: 'text-slate-300' },
        { text: '2. Coolgen Solutions (Mobile Dev Intern, Aug–Nov 2025): ', color: 'text-emerald-400', bold: true },
        { text: 'Production React Native & native Android features in agile sprint cycles.\n', color: 'text-slate-300' },
        { text: '3. Rubixe AI Solutions (Data Science, May–Nov 2024): ', color: 'text-rose-400', bold: true },
        { text: 'Credit risk prediction pipeline using XGBoost on customer account, enquiry & demographic data — evaluated on Gini coefficient & rank ordering.\n', color: 'text-slate-300' },
        { text: '4. Education: ', color: 'text-amber-400', bold: true },
        { text: 'B.Tech IT, Prathyusha Engineering College (Nov 2020 – May 2024) + Learning Excel: Data Analysis.', color: 'text-slate-300' },
      ],
    };
  }

  if (q === 'contact' || q.includes('email') || q.includes('location') || q.includes('city') || q.includes('chennai') || q.includes('hyderabad') || q.includes('bangalore') || q.includes('cuddalore')) {
    return {
      title: '✉️ CONTACT & LOCATION PREFERENCES',
      segments: [
        { text: '• Based In: ', color: 'text-emerald-400', bold: true },
        { text: 'Cuddalore, India\n', color: 'text-slate-300' },
        { text: '• Preferred Work Locations: ', color: 'text-sky-400', bold: true },
        { text: 'Chennai · Hyderabad · Bangalore\n', color: 'text-slate-300' },
        { text: '• Emails: ', color: 'text-amber-400', bold: true },
        { text: 'shivakkumarc@gmail.com  |  sivakumarcgbtech@gmail.com\n', color: 'text-slate-300' },
        { text: '• Profiles: ', color: 'text-violet-400', bold: true },
        { text: 'linkedin.com/in/shivakkumarg  |  github.com/shivakkumar-ai-llm-researcher', color: 'text-slate-300' },
      ],
    };
  }

  return {
    title: '🤖 SIVAKUMAR AI COPILOT',
    segments: [
      { text: `Query received: "${rawInput}". `, color: 'text-slate-300' },
      { text: 'I specialize in LangGraph multi-agent systems, Fin360 AI cost optimization, XGBoost credit risk modeling, and React Native / Django REST engineering.\n', color: 'text-slate-300' },
      { text: 'Try typing ', color: 'text-slate-400' },
      { text: 'hire', color: 'text-amber-400', bold: true },
      { text: ', ', color: 'text-slate-400' },
      { text: 'ai', color: 'text-sky-400', bold: true },
      { text: ', ', color: 'text-slate-400' },
      { text: 'fin360', color: 'text-violet-400', bold: true },
      { text: ', ', color: 'text-slate-400' },
      { text: 'projects', color: 'text-rose-400', bold: true },
      { text: ', or ', color: 'text-slate-400' },
      { text: 'contact', color: 'text-emerald-400', bold: true },
      { text: '.', color: 'text-slate-400' },
    ],
  };
}

export default function TerminalCopilotSection() {
  const [lines, setLines] = useState<TerminalLine[]>([
    ...WELCOME_LINES,
    {
      id: 3,
      type: 'command',
      command: 'hire',
    },
    {
      id: 4,
      type: 'output',
      ...buildResponse('hire'),
    },
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setLines([...WELCOME_LINES]);
      setInput('');
      return;
    }

    const nextId = Date.now();
    const response = buildResponse(trimmed);
    setLines((prev) => [
      ...prev,
      { id: nextId, type: 'command', command: trimmed },
      { id: nextId + 1, type: 'output', ...response },
    ]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
  };

  const quickButtons = [
    { label: 'hire (HR Pitch)', cmd: 'hire', icon: <Star className="w-3.5 h-3.5 text-amber-500" /> },
    { label: 'skills', cmd: 'skills', icon: <Layers className="w-3.5 h-3.5 text-blue-500" /> },
    { label: 'ai (LangGraph & RAG)', cmd: 'ai', icon: <Brain className="w-3.5 h-3.5 text-indigo-500" /> },
    { label: 'fin360', cmd: 'fin360', icon: <Cpu className="w-3.5 h-3.5 text-emerald-500" /> },
    { label: 'projects', cmd: 'projects', icon: <FolderGit2 className="w-3.5 h-3.5 text-rose-500" /> },
    { label: 'contact', cmd: 'contact', icon: <Mail className="w-3.5 h-3.5 text-sky-500" /> },
    { label: 'clear', cmd: 'clear', icon: <RotateCcw className="w-3.5 h-3.5 text-slate-500" /> },
  ];

  return (
    <section
      id="copilot"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-24"
    >
      {/* Centered Header */}
      <MotionReveal className="flex flex-col items-center text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4 shadow-sm">
          <Terminal className="w-3.5 h-3.5" />
          <span>Interactive Candidate Copilot</span>
        </div>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight">
          Ask Sivakumar AI — Developer Terminal
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-2xl leading-relaxed">
          Query candidate background, production AI implementations, Fin360 architecture, and interview fit via command line or natural prompts.
        </p>
      </MotionReveal>

      {/* Quick Command Pill Bar */}
      <MotionReveal delay={0.05} className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {quickButtons.map((btn) => (
          <button
            key={btn.cmd}
            type="button"
            onClick={() => runCommand(btn.cmd)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full clay-btn text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            {btn.icon}
            <span>{btn.label}</span>
          </button>
        ))}
      </MotionReveal>

      {/* Interactive Dark Terminal Window */}
      <MotionReveal delay={0.1}>
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl overflow-hidden border border-slate-300/80 dark:border-white/[0.1] bg-[#0B1120] shadow-2xl shadow-slate-900/20 dark:shadow-black/60 cursor-text"
        >
        {/* Window Title Bar */}
        <div className="px-4 py-3 bg-[#111827] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 font-mono text-xs text-slate-400">
              sivakumar-copilot@ai-vm:~
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500 hidden sm:inline">
            Agentic AI Engine
          </span>
        </div>

        {/* Scrollable Terminal Output */}
        <div
          ref={bodyRef}
          className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed space-y-3.5 max-h-[380px] overflow-y-auto terminal-scrollbar"
        >
          {lines.map((line) => {
            if (line.type === 'command') {
              return (
                <div key={line.id} className="flex items-center gap-2 pt-1">
                  <span className="text-emerald-400 font-semibold shrink-0">
                    sivakumar@ai-vm:~$
                  </span>
                  <span className="text-white font-medium">{line.command}</span>
                </div>
              );
            }

            return (
              <div key={line.id} className="space-y-1.5">
                {line.title && (
                  <div className="text-amber-400 font-bold tracking-wide">
                    {line.title}
                  </div>
                )}
                <div className="whitespace-pre-wrap">
                  {line.segments?.map((seg, idx) => (
                    <span
                      key={idx}
                      className={`${seg.color || 'text-slate-300'} ${
                        seg.bold ? 'font-semibold' : ''
                      }`}
                    >
                      {seg.text}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Active Input Prompt */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400 font-semibold shrink-0">
              sivakumar@ai-vm:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a command (help, hire, ai, fin360, projects) or ask a question..."
              className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none text-xs sm:text-[13px] font-mono"
              aria-label="Developer Terminal Input"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors shrink-0"
              aria-label="Run command"
              title="Run command"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
      </MotionReveal>
    </section>
  );
}
