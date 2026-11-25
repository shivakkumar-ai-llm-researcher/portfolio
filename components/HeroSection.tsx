'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate
} from 'framer-motion';
import {
  ArrowDown,
  Mail,
  Linkedin,
  Github,
  Building,
  GraduationCap,
  MapPin,
  Bot,
  Cloud,
  Smartphone,
  BarChart3,
  Sparkles
} from 'lucide-react';

export default function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt motion values
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(smoothY, [0, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [0, 1], [-10, 10]);

  const glowX = useTransform(smoothX, [0, 1], ['0%', '100%']);
  const glowY = useTransform(smoothY, [0, 1], ['0%', '100%']);
  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${glowX} ${glowY}, rgba(59, 130, 246, 0.18), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[88vh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Personal Introduction & Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start"
        >
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
            Specializing in agentic multi-agent systems (LangGraph), cloud &amp; LLM inference cost optimization (Fin360 Framework), predictive machine learning (XGBoost), and production mobile applications.
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

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/shivakkumar-ai-llm-researcher"
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

          {/* Core Capabilities Pill Tags */}
          <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-200 dark:border-white/[0.08] w-full">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-xs text-slate-700 dark:text-slate-300">
              <Bot className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Multi-Agent Orchestration
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-xs text-slate-700 dark:text-slate-300">
              <Cloud className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Fin360 Cost Optimization
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-xs text-slate-700 dark:text-slate-300">
              <Smartphone className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              React Native Mobile
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-xs text-slate-700 dark:text-slate-300">
              <BarChart3 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              Predictive ML &amp; Risk
            </span>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Perspective Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          style={{ perspective: 1200 }}
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="clay-card relative rounded-3xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/15"
          >
            {/* Dynamic 3D Cursor Spotlight Sheen */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-3xl z-30"
              style={{ background: spotlight }}
            />

            {/* Prominent 3D Portrait Stage */}
            <div
              className="relative h-64 sm:h-72 w-full rounded-t-3xl bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-slate-100/80 dark:from-blue-600/25 dark:via-indigo-600/15 dark:to-slate-900/85 border-b border-slate-200/80 dark:border-white/[0.08] flex items-end justify-center overflow-visible pt-4"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Orbital Rings & Ambient Depth Glow */}
              <div className="absolute inset-0 overflow-hidden rounded-t-3xl pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.28),transparent_65%)]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-blue-500/20 dark:border-blue-400/20" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-indigo-500/10 dark:border-indigo-400/10" />
              </div>

              {/* Elevated 3D Portrait Cutout */}
              <div
                className="relative z-10 h-full flex items-end justify-center pointer-events-none"
                style={{ transform: 'translateZ(42px)' }}
              >
                <img
                  src="/profile.png"
                  alt="Sivakumar — AI/ML Engineer"
                  className="h-full w-auto object-contain object-bottom drop-shadow-[0_18px_32px_rgba(15,23,42,0.45)] select-none"
                />
              </div>

              {/* Floating 3D Badges */}
              <div
                className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-panel text-[11px] font-semibold text-blue-600 dark:text-blue-400 shadow-md"
                style={{ transform: 'translateZ(60px)' }}
              >
                <Sparkles className="w-3 h-3" />
                <span>Agentic AI</span>
              </div>

              <div
                className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-panel text-[11px] font-medium text-slate-700 dark:text-slate-200 shadow-md"
                style={{ transform: 'translateZ(60px)' }}
              >
                <MapPin className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                <span>Cuddalore, India</span>
              </div>
            </div>

            {/* Card Body: Identity, Timeline & Contact */}
            <div className="p-6 relative z-20" style={{ transform: 'translateZ(20px)' }}>
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
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
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Preferred: Chennai · Hyderabad · Bangalore
                  </p>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Open to Collaborate
                </span>
              </div>

              {/* Quick Experience Timeline */}
              <div className="py-4 space-y-2.5 border-b border-slate-200 dark:border-white/[0.08]">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
