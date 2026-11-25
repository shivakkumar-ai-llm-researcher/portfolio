'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-white/[0.08] bg-slate-100/60 dark:bg-[#070B16] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & System Status */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2.5 group">
            <Logo size="sm" />
            <span className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">Sivakumar</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI/ML Engineer</span>
            <span>·</span>
            <span>Hyderabad & Coimbatore, India</span>
          </div>
        </div>

        {/* Quick Nav Links in Updated Order */}
        <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400 flex-wrap justify-center font-medium">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#systems" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/shivakkumar-ai-llm-researcher"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl clay-btn text-slate-600 dark:text-slate-400 hover:text-blue-600"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivakkumarg"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl clay-btn text-slate-600 dark:text-slate-400 hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:opacity-90 ml-1"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200 dark:border-white/[0.04] text-center text-[11px] text-slate-500 dark:text-slate-500">
        © 2026 Sivakumar · Autonomous Agent Architectures & Enterprise Systems
      </div>
    </footer>
  );
}
