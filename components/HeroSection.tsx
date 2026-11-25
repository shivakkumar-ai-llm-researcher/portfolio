'use client';

import React from 'react';
import {
  ArrowDown,
  Download,
  Mail,
  Linkedin,
  Github,
  Building,
  GraduationCap
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[85vh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Personal Introduction & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill text-xs text-slate-700 dark:text-slate-300 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>AI/ML Engineer · Coolgen Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-5">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Sivakumar</span>. <br />
            Building autonomous AI systems that act.
          </h1>

          {/* Concise Summary */}
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
            Specializing in agentic multi-agent systems (LangGraph), cloud & LLM inference cost optimization (Fin360 Framework), predictive machine learning (XGBoost), and production mobile applications.
          </p>

          {/* Action Buttons (Fully Rounded Pills) */}
          <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
            <a
              href="#systems"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Resume (CV)</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Shiva-kkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn p-3 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/shivakkumarg"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn p-3 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Key Competency Badges (Fully Rounded Pills) */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/80 dark:border-white/[0.08] w-full">
            <span className="px-3 py-1 rounded-full glass-pill text-xs text-slate-700 dark:text-slate-300">
              ⚡ Multi-Agent Orchestration
            </span>
            <span className="px-3 py-1 rounded-full glass-pill text-xs text-slate-700 dark:text-slate-300">
              ☁️ Fin360 Cost Optimization
            </span>
            <span className="px-3 py-1 rounded-full glass-pill text-xs text-slate-700 dark:text-slate-300">
              📱 React Native Mobile
            </span>
            <span className="px-3 py-1 rounded-full glass-pill text-xs text-slate-700 dark:text-slate-300">
              📊 Predictive ML & Risk
            </span>
          </div>
        </div>

        {/* Right Column: Clean, Compact Overview Card */}
        <div className="lg:col-span-5 w-full">
          <div className="clay-card p-6 relative overflow-hidden rounded-3xl">
            {/* Top Identity Block */}
            <div className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/15 to-indigo-500/20 dark:from-blue-500/20 dark:to-indigo-500/25 ring-2 ring-blue-500/30 overflow-hidden shrink-0 shadow-md shadow-blue-500/15">
                <img
                  src="/profile.png"
                  alt="Sivakumar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-lg text-slate-900 dark:text-white">
                    Sivakumar
                  </h2>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active" />
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                  AI/ML Engineer · Coolgen Solutions
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Hyderabad & Coimbatore, India
                </p>
              </div>
            </div>

            {/* Quick Experience Timeline */}
            <div className="py-4 space-y-3 border-b border-slate-200 dark:border-white/[0.08]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Coolgen Solutions
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">Associate Engineer (2026–Present)</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Rubixe AI Solutions
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">Data Science (2024)</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  Prathyusha Eng. College
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">B.Tech IT (2020–2024)</span>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-3.5 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 truncate">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">shivakkumarc@gmail.com</span>
              </span>
              <a
                href="#contact"
                className="text-blue-600 dark:text-blue-400 hover:underline shrink-0 font-semibold ml-2"
              >
                Connect →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
