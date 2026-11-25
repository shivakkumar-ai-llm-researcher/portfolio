'use client';

import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Stack' },
  { id: 'projects', label: 'Systems' },
  { id: 'timeline', label: 'Path' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function ProgressRail() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      const sectionElements = sections.map((sec) => document.getElementById(sec.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex lg:flex-col items-center p-4 rounded-3xl glass border border-signal/15">
      <div className="relative flex flex-col gap-5 items-center">
        {/* Track background line */}
        <div className="absolute left-1/2 top-2 bottom-2 w-[2px] -translate-x-1/2 bg-white/10 rounded-full pointer-events-none" />
        {/* Track fill line */}
        <div
          className="absolute left-1/2 top-2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-signal via-pulse to-wave rounded-full transition-all duration-150 pointer-events-none"
          style={{ height: `${scrollProgress}%` }}
        />

        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="group relative z-10 p-1 focus:outline-none"
              aria-label={`Jump to ${sec.label}`}
            >
              <span
                className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-signal ring-4 ring-signal/20 scale-125 shadow-[0_0_12px_rgba(198,255,94,0.8)]'
                    : 'bg-[#1C251D] border border-white/20 group-hover:border-signal/60'
                }`}
              />
              {/* Tooltip Label */}
              <span className="absolute right-7 top-1/2 -translate-y-1/2 font-mono text-[10.5px] text-ink bg-[#0A0E0A]/90 border border-signal/20 px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-1 transition-all duration-200 shadow-lg">
                {sec.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
