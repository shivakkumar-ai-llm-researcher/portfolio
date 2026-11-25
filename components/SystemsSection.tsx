'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  Layers,
  Cpu,
  Smartphone,
  Server,
  TrendingDown,
  Code2,
  Bot,
  Sparkles
} from 'lucide-react';

type Category = 'all' | 'ai' | 'ml' | 'mobile';

interface ProjectItem {
  id: string;
  category: 'ai' | 'ml' | 'mobile';
  tag: string;
  title: string;
  organization: string;
  summary: string;
  keyPoints: string[];
  stack: string[];
  accentBorder: string;
  tagColor: string;
}

const projects: ProjectItem[] = [
  {
    id: 'agentic-ai',
    category: 'ai',
    tag: 'MULTI-AGENT',
    title: 'Enterprise Multi-Agent Workflows',
    organization: 'Coolgen Solutions',
    summary:
      'Designing autonomous multi-agent pipelines with LangGraph and LangChain that reason, plan, and execute multi-step enterprise workflows.',
    keyPoints: [
      'Built supervisor graph topologies with dynamic tool execution and self-correction',
      'Integrated human-in-the-loop checkpoints for enterprise review and safety',
    ],
    stack: ['LangGraph', 'LangChain', 'AutoGen', 'Python', 'RAG'],
    accentBorder: 'group-hover:border-blue-500/50',
    tagColor: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30',
  },
  {
    id: 'fin360',
    category: 'ai',
    tag: 'COST FINOPS',
    title: 'Fin360 AI Cost Optimization',
    organization: 'Coolgen Solutions',
    summary:
      'AI inference and cloud cost reduction architecture that optimizes multi-agent and LLM workloads to significantly lower token expenditure.',
    keyPoints: [
      'Implemented semantic prompt caching with Redis to eliminate redundant LLM API calls',
      'Engineered dynamic model tier routing between fast open-source SLMs and frontier LLMs',
    ],
    stack: ['Python', 'Redis', 'LangGraph', 'FastAPI'],
    accentBorder: 'group-hover:border-emerald-500/50',
    tagColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30',
  },
  {
    id: 'credit-risk',
    category: 'ml',
    tag: 'PREDICTIVE ML',
    title: 'Credit Risk Prediction Model',
    organization: 'Rubixe AI Solutions',
    summary:
      'End-to-end machine learning pipeline assessing applicant creditworthiness and default risk from account and enquiry datasets.',
    keyPoints: [
      'Engineered 80+ domain features and trained XGBoost classification models',
      'Evaluated model performance using Gini coefficients and rank-ordering metrics',
    ],
    stack: ['Python', 'XGBoost', 'Scikit-Learn', 'Feature Engineering', 'Gini'],
    accentBorder: 'group-hover:border-amber-500/50',
    tagColor: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30',
  },
  {
    id: 'mobile-apps',
    category: 'mobile',
    tag: 'MOBILE & WEB',
    title: 'Enterprise Mobile Applications',
    organization: 'Coolgen Solutions',
    summary:
      'Production cross-platform mobile apps built with React Native and native Android, integrated with enterprise REST API backends.',
    keyPoints: [
      'Developed native-feeling mobile application features using React Native and Android',
      'Integrated mobile clients with Django REST Framework backends in agile sprint cycles',
    ],
    stack: ['React Native', 'Android', 'Django REST Framework', 'JavaScript'],
    accentBorder: 'group-hover:border-purple-500/50',
    tagColor: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/30',
  },
  {
    id: 'rag-system',
    category: 'ai',
    tag: 'RAG RETRIEVAL',
    title: 'Enterprise RAG & Search System',
    organization: 'Coolgen Solutions',
    summary:
      'Retrieval-Augmented Generation pipeline enabling internal teams to query enterprise documentation with citation-backed accuracy.',
    keyPoints: [
      'Implemented contextual chunking and hybrid vector embeddings search',
      'Built low-latency retrieval chains connected to internal knowledge bases',
    ],
    stack: ['LangChain', 'Vector Search', 'Embeddings', 'Python'],
    accentBorder: 'group-hover:border-cyan-500/50',
    tagColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30',
  },
  {
    id: 'thought-leadership',
    category: 'ai',
    tag: 'PUBLICATIONS',
    title: 'Multi-Agent Technical Articles',
    organization: 'Medium & LinkedIn',
    summary:
      'Published in-depth technical breakdowns explaining multi-agent architectures, reinforcement learning pipelines, and agentic workflows.',
    keyPoints: [
      'Authored deep dives into LangGraph state machine designs and orchestration patterns',
      'Shared practical architectural trade-offs between monolithic prompts and agent delegation',
    ],
    stack: ['Multi-Agent Systems', 'LangGraph', 'AI Research'],
    accentBorder: 'group-hover:border-indigo-500/50',
    tagColor: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30',
  },
];

export default function SystemsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="systems" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight">
            Production AI & Engineering Projects.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5 max-w-2xl">
            Core systems, cost optimization frameworks, and predictive models built across enterprise initiatives.
          </p>
        </div>

        {/* Category Filters (Pill Buttons) */}
        <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
          {[
            { id: 'all', label: 'All Work' },
            { id: 'ai', label: 'Agentic & AI' },
            { id: 'ml', label: 'Machine Learning' },
            { id: 'mobile', label: 'Mobile & Web' },
          ].map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as Category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-300 dark:hover:border-slate-600'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            className={`glass-panel p-6 rounded-3xl flex flex-col justify-between group hover:-translate-y-1.5 transition-all h-full ${item.accentBorder}`}
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] tracking-wider font-semibold px-2.5 py-0.5 rounded-full border ${item.tagColor}`}>
                  {item.tag}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {item.organization}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              {/* Summary */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {item.summary}
              </p>

              {/* Key Points */}
              <div className="space-y-1.5 mb-5">
                {item.keyPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">›</span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Chips */}
            <div className="pt-3 border-t border-slate-200/80 dark:border-white/[0.06] flex flex-wrap gap-1.5">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-2.5 py-0.5 rounded-full glass-pill text-slate-700 dark:text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
