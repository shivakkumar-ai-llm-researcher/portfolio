'use client';

import React from 'react';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Building,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  Smartphone,
  BarChart3,
  Bot
} from 'lucide-react';

interface Experience {
  company: string;
  shortName: string;
  role: string;
  period: string;
  location: string;
  type: string;
  typeStyle: string;
  avatarBg: string;
  accentBorder: string;
  bulletColor: string;
  icon: React.ReactNode;
  bullets: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    company: 'Coolgen Solutions Pvt. Ltd',
    shortName: 'CS',
    role: 'Associate Engineer',
    period: 'Jan 2026 — Present',
    location: 'Coimbatore & Hyderabad, India',
    type: 'Full-time',
    typeStyle: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    avatarBg: 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/25',
    accentBorder: 'hover:border-indigo-500/50',
    bulletColor: 'text-indigo-600 dark:text-indigo-400',
    icon: <Bot className="w-5 h-5 text-white" />,
    bullets: [
      'Architecting enterprise agentic workflows and multi-agent supervisor graphs in LangGraph.',
      'Core contributor to the Fin360 AI inference and cloud cost optimization framework.',
    ],
    skills: ['Agentic AI', 'LangGraph', 'LangChain', 'Fin360 Framework', 'Redis'],
  },
  {
    company: 'Coolgen Solutions Pvt. Ltd',
    shortName: 'CS',
    role: 'Mobile App Development Intern',
    period: 'Aug 2025 — Nov 2025',
    location: 'Coimbatore, India',
    type: 'Internship',
    typeStyle: 'bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800',
    avatarBg: 'bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-md shadow-sky-500/25',
    accentBorder: 'hover:border-sky-500/50',
    bulletColor: 'text-sky-600 dark:text-sky-400',
    icon: <Smartphone className="w-5 h-5 text-white" />,
    bullets: [
      'Developed native-feeling cross-platform mobile features using React Native and Android.',
      'Contributed to production codebases adhering to agile two-week sprint cycles.',
    ],
    skills: ['React Native', 'Android', 'REST APIs', 'Agile', 'Git'],
  },
  {
    company: 'Rubixe - AI Solutions Company',
    shortName: 'RX',
    role: 'Data Science Intern',
    period: 'May 2024 — Nov 2024',
    location: 'Bengaluru, India',
    type: 'Internship',
    typeStyle: 'bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800',
    avatarBg: 'bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/25',
    accentBorder: 'hover:border-rose-500/50',
    bulletColor: 'text-rose-600 dark:text-rose-400',
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    bullets: [
      'Engineered credit risk prediction pipeline assessing applicant creditworthiness.',
      'Trained XGBoost models evaluated on Gini coefficients and rank-ordering metrics.',
    ],
    skills: ['Python', 'XGBoost', 'Feature Engineering', 'Gini Coefficient', 'EDA'],
  },
  {
    company: 'Prathyusha Engineering College',
    shortName: 'PEC',
    role: 'B.Tech in Information Technology',
    period: '2020 — 2024',
    location: 'Tamil Nadu, India',
    type: 'Education',
    typeStyle: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    avatarBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25',
    accentBorder: 'hover:border-emerald-500/50',
    bulletColor: 'text-emerald-600 dark:text-emerald-400',
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    bullets: [
      'Graduated with First Class distinction in Information Technology.',
      'Built a CNN handwritten digit recognizer achieving 98.6% benchmark accuracy.',
    ],
    skills: ['Computer Science', 'Machine Learning', 'Data Structures', 'Deep Learning'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold mb-3 shadow-sm shadow-blue-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CAREER TRAJECTORY</span>
        </div>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight">
          Work Experience & Education.
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5 max-w-2xl leading-relaxed">
          Progression from predictive machine learning and mobile development to enterprise agentic systems.
        </p>
      </div>

      {/* Modern 2-Column Bento Grid Layout (No cavernous empty space!) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {experiences.map((exp) => (
          <div
            key={exp.company + exp.role}
            className={`clay-card p-6 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 transition-all h-full ${exp.accentBorder}`}
          >
            <div>
              {/* Header: Company Avatar + Role + Metadata */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3.5">
                  <div className={`w-11 h-11 rounded-2xl ${exp.avatarBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {exp.company}
                      </p>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.08] text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/[0.08]">
                        {exp.shortName}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${exp.typeStyle}`}>
                    {exp.type}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 glass-pill px-2.5 py-0.5 rounded-full">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-5">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className={`${exp.bulletColor} font-bold mt-0.5`}>›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Chips */}
            <div className="pt-3.5 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap gap-1.5">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] px-2.5 py-0.5 rounded-full glass-pill text-slate-700 dark:text-slate-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
