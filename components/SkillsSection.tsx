'use client';

import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { MotionReveal, MotionStaggerGrid, MotionStaggerItem } from './MotionPrimitives';

interface Skill {
  name: string;
  category: 'agentic' | 'ml' | 'backend' | 'mobile';
  level: string;
  context: string;
}

const skills: Skill[] = [
  // Agentic & AI
  { name: 'LangGraph', category: 'agentic', level: 'Production', context: 'Supervisor agent state machines, cyclic loops & self-correction' },
  { name: 'LangChain', category: 'agentic', level: 'Production', context: 'Multi-agent chains, dynamic tool binding, and RAG retrieval' },
  { name: 'Multi-Agent Systems', category: 'agentic', level: 'Advanced', context: 'Autonomous plan-and-solve agent topologies & human review' },
  { name: 'AutoGen', category: 'agentic', level: 'Advanced', context: 'Multi-agent conversation orchestration and autonomous tool execution' },
  { name: 'RAG & Vector Search', category: 'agentic', level: 'Production', context: 'Dense/sparse search, chunking, and Redis vector caching' },
  { name: 'Prompt Engineering', category: 'agentic', level: 'Advanced', context: 'Few-shot structured JSON extraction, guardrails & evaluation' },

  // Model & ML
  { name: 'XGBoost & Scikit-Learn', category: 'ml', level: 'Production', context: 'Credit risk prediction evaluated on Gini coefficient & rank ordering' },
  { name: 'Reinforcement Learning', category: 'ml', level: 'Applied', context: 'Decision-making agent policies and reward-driven optimization' },
  { name: 'Feature Engineering', category: 'ml', level: 'Production', context: 'Enriching customer transaction, enquiry, and demographic data' },
  { name: 'PyTorch', category: 'ml', level: 'Advanced', context: 'Deep learning model forward passes and fine-tuning' },
  { name: 'Predictive Modeling', category: 'ml', level: 'Production', context: 'Risk classification and applicant credit scoring pipelines' },

  // Backend & Cloud
  { name: 'Django REST Framework', category: 'backend', level: 'Production', context: 'High-throughput enterprise APIs and database query tuning' },
  { name: 'Python', category: 'backend', level: 'Core Language', context: 'Async microservices, agent execution loops, and data pipelines' },
  { name: 'FastAPI', category: 'backend', level: 'Production', context: 'Low-latency REST endpoints with Pydantic data validation' },
  { name: 'Fin360 Cost Optimization', category: 'backend', level: 'Framework', context: 'Semantic caching with Redis to lower enterprise inference costs' },
  { name: 'Redis', category: 'backend', level: 'Production', context: 'In-memory semantic prompt caching and message queuing' },

  // Mobile & Frontend
  { name: 'React Native', category: 'mobile', level: 'Production', context: 'Cross-platform mobile application development at Coolgen Solutions' },
  { name: 'Android Development', category: 'mobile', level: 'Production', context: 'Native Android architecture, responsive layouts, and API integration' },
  { name: 'WordPress Development', category: 'mobile', level: 'Top Skill', context: 'Custom themes, enterprise web portals, and CMS integrations' },
  { name: 'Next.js & TypeScript', category: 'mobile', level: 'Production', context: 'Modern web applications with server-side rendering and type safety' },
];

const categoryStyles: Record<string, { badge: string }> = {
  agentic: {
    badge: 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  },
  ml: {
    badge: 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  },
  backend: {
    badge: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  },
  mobile: {
    badge: 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  },
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'agentic', label: 'Agentic & AI' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'backend', label: 'Backend & Cloud' },
    { id: 'mobile', label: 'Mobile & Web' },
  ];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.context.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-24">
      {/* Section Header */}
      <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold mb-3 shadow-sm shadow-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SKILLS & TECHNOLOGIES</span>
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight">
            Technical Stack & Expertise.
          </h2>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-60">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
          />
        </div>
      </MotionReveal>

      {/* Category Pills (Fully Rounded) */}
      <MotionReveal delay={0.05} className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                  : 'bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-300 dark:hover:border-slate-600'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </MotionReveal>

      {/* Skills Grid */}
      <MotionStaggerGrid key={activeCategory + searchQuery} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredSkills.map((skill) => (
          <MotionStaggerItem key={skill.name}>
            <div
              className="clay-card p-5 flex flex-col justify-between group hover:-translate-y-0.5 hover:border-blue-500/40 transition-all rounded-3xl h-full"
            >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
                <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${categoryStyles[skill.category]?.badge || 'bg-slate-100 text-slate-700'}`}>
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {skill.context}
              </p>
            </div>
          </div>
          </MotionStaggerItem>
        ))}
      </MotionStaggerGrid>
    </section>
  );
}
