'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen, ExternalLink, Calendar, Sparkles } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-24">
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold mb-3 shadow-sm shadow-blue-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CREDENTIALS &amp; PUBLICATIONS</span>
        </div>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight">
          Education, Certifications &amp; Thought Leadership.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Education Card */}
        <div className="clay-card p-6 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 hover:border-emerald-500/50 transition-all">
          <div>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mb-4 shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Education
            </span>
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mt-1.5 mb-1">
              Prathyusha Engineering College
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Bachelor of Technology (B.Tech), Information Technology
            </p>
          </div>

          <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-white/[0.06] text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Nov 2020 – May 2024
            </span>
            <span className="px-2.5 py-0.5 rounded-full glass-pill text-emerald-700 dark:text-emerald-300 font-semibold">
              B.Tech IT
            </span>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="clay-card p-6 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 hover:border-amber-500/50 transition-all">
          <div>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mb-4 shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Certification
            </span>
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mt-1.5 mb-1">
              Learning Excel: Data Analysis
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Certified in quantitative analytics, structured data analysis, and business reporting workflows.
            </p>
          </div>

          <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-white/[0.06] text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>LinkedIn Certification</span>
            <span className="px-2.5 py-0.5 rounded-full glass-pill text-amber-700 dark:text-amber-300 font-semibold">
              Completed
            </span>
          </div>
        </div>

        {/* Medium / Thought Leadership Card */}
        <div className="clay-card p-6 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 hover:border-blue-500/50 transition-all">
          <div>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-4 shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Thought Leadership
            </span>
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mt-1.5 mb-1">
              Multi-Agent Systems on Medium
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Published technical articles breaking down complex multi-agent AI architectures and digital transformation workflows for practitioners.
            </p>
          </div>

          <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-white/[0.06] text-[11px] flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400">Medium Publication</span>
            <a
              href="https://www.linkedin.com/in/shivakkumarg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-semibold"
            >
              View Profile <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
