'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen, ExternalLink, Calendar } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-20 px-6 md:px-12 max-w-[1240px] mx-auto">
      <div className="mb-14">
        <div className="eyebrow mb-3">05 · Education & Leadership</div>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink max-w-[640px] leading-tight">
          Academic foundation, certifications, and technical publications.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Education Card */}
        <div className="glass p-7 rounded-3xl flex flex-col justify-between hover:border-signal/40 transition-all duration-300">
          <div>
            <div className="w-10 h-10 rounded-xl bg-signal/10 border border-signal/30 flex items-center justify-center text-signal mb-5">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs text-signal font-medium uppercase tracking-wider">Education</span>
            <h3 className="font-display font-semibold text-xl text-ink mt-2 mb-1">
              Prathyusha Engineering College
            </h3>
            <p className="font-body text-sm text-muted font-medium">
              Bachelor of Technology (B.Tech) — Information Technology
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-muted-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-signal" /> Nov 2020 – May 2024</span>
            <span className="text-signal font-semibold">Graduated</span>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="glass p-7 rounded-3xl flex flex-col justify-between hover:border-pulse/40 transition-all duration-300">
          <div>
            <div className="w-10 h-10 rounded-xl bg-pulse/10 border border-pulse/30 flex items-center justify-center text-pulse mb-5">
              <Award className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs text-pulse font-medium uppercase tracking-wider">Certification</span>
            <h3 className="font-display font-semibold text-xl text-ink mt-2 mb-1">
              Learning Excel: Data Analysis
            </h3>
            <p className="font-body text-sm text-muted">
              Professional certification focusing on quantitative analytics, statistical modeling, data manipulation, and reporting dashboards.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-muted-2 flex items-center justify-between">
            <span>Verified Credentials</span>
            <span className="text-pulse font-semibold">Completed</span>
          </div>
        </div>

        {/* Medium / Thought Leadership Card */}
        <div className="glass p-7 rounded-3xl flex flex-col justify-between hover:border-wave/40 transition-all duration-300">
          <div>
            <div className="w-10 h-10 rounded-xl bg-wave/10 border border-wave/30 flex items-center justify-center text-wave mb-5">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs text-wave font-medium uppercase tracking-wider">Thought Leadership</span>
            <h3 className="font-display font-semibold text-xl text-ink mt-2 mb-1">
              Multi-Agent AI Architecture
            </h3>
            <p className="font-body text-sm text-muted">
              Published technical thought leadership on Medium, breaking down complex multi-agent orchestration, LangChain pipelines, and autonomous agent design.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs flex items-center justify-between">
            <span className="text-muted-2">Medium Publication</span>
            <a
              href="https://www.linkedin.com/in/shivakkumarg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wave hover:underline flex items-center gap-1 font-semibold"
            >
              Read Articles <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
