'use client';

import React from 'react';
import {
  Bot,
  Zap,
  TrendingUp,
  Smartphone,
  Sparkles
} from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: <Bot className="w-5 h-5 text-white" />,
      iconBg: 'bg-blue-600 shadow-md shadow-blue-500/25',
      hoverBorder: 'hover:border-blue-500/50',
      title: 'Agentic Multi-Agent AI',
      summary: 'Autonomous supervisor graphs and multi-agent workflows in LangGraph & AutoGen with dynamic tool execution, memory, and reflection.',
      stack: ['LangGraph', 'LangChain', 'AutoGen'],
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      iconBg: 'bg-emerald-600 shadow-md shadow-emerald-500/25',
      hoverBorder: 'hover:border-emerald-500/50',
      title: 'Fin360 Cost Optimization',
      summary: 'Enterprise cloud & AI inference cost reduction framework utilizing Redis semantic prompt caching and dynamic model tier routing.',
      stack: ['Fin360', 'Redis Cache', 'Cost Routing'],
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      iconBg: 'bg-amber-600 shadow-md shadow-amber-500/25',
      hoverBorder: 'hover:border-amber-500/50',
      title: 'Predictive Machine Learning',
      summary: 'Credit risk prediction pipeline with XGBoost engineered at Rubixe AI, evaluated rigorously on Gini coefficients and rank ordering.',
      stack: ['Python', 'XGBoost', 'Gini Metrics'],
    },
    {
      icon: <Smartphone className="w-5 h-5 text-white" />,
      iconBg: 'bg-purple-600 shadow-md shadow-purple-500/25',
      hoverBorder: 'hover:border-purple-500/50',
      title: 'Enterprise Mobile & Backend',
      summary: 'Cross-platform mobile applications in React Native & native Android, integrated with resilient Django REST Framework backend APIs.',
      stack: ['React Native', 'Android', 'Django REST'],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold mb-3 shadow-sm shadow-blue-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT ME</span>
        </div>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight">
          Engineering AI systems that solve real business problems.
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          AI/ML Engineer at Coolgen Solutions with a background in data science and mobile platforms. Specializing in autonomous multi-agent orchestration, cloud inference cost optimization, and production-ready applications.
        </p>
      </div>

      {/* Symmetrical 4-Card Grid with Vibrant Icon Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className={`clay-card p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all h-full rounded-3xl ${pillar.hoverBorder}`}
          >
            <div>
              <div className={`w-11 h-11 rounded-2xl ${pillar.iconBg} mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                {pillar.icon}
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {pillar.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap gap-1.5">
              {pillar.stack.map((item) => (
                <span
                  key={item}
                  className="text-[10px] px-2.5 py-0.5 rounded-full glass-pill text-slate-700 dark:text-slate-300 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
