'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import Logo from './Logo';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#systems' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Ask AI', href: '#copilot' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'systems', 'experience', 'skills', 'copilot', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-full px-5 py-2.5 flex items-center justify-between ${
          scrolled
            ? 'glass-panel shadow-md'
            : 'glass-panel bg-opacity-50'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center group focus:outline-none"
          aria-label="Home"
        >
          <Logo size="md" />
        </a>

        {/* Desktop Nav Items (Fully Rounded Capsule Pill) */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/[0.06]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs transition-all duration-200 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-white dark:bg-white/[0.1] shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/[0.03]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Controls (Fully Rounded Pills) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Animated Day / Night Toggle Switch */}
          <button
            onClick={toggleTheme}
            role="switch"
            aria-checked={theme === 'dark'}
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle Theme"
            className={`relative w-14 h-7 rounded-full p-0.5 transition-colors duration-300 shadow-inner border cursor-pointer flex items-center ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-slate-800 via-indigo-950 to-slate-900 border-indigo-500/30'
                : 'bg-gradient-to-r from-sky-400 via-blue-400 to-blue-500 border-sky-300/60'
            }`}
          >
            {/* Background Sky / Stars Micro-Accents */}
            <span
              aria-hidden="true"
              className={`absolute left-2 w-1 h-1 rounded-full bg-white transition-all duration-300 ${
                theme === 'dark' ? 'opacity-80 scale-100' : 'opacity-0 scale-0'
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute left-4 top-1.5 w-0.5 h-0.5 rounded-full bg-indigo-200 transition-all duration-300 ${
                theme === 'dark' ? 'opacity-90 scale-100' : 'opacity-0 scale-0'
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute right-2.5 w-1.5 h-1.5 rounded-full bg-white/80 transition-all duration-300 ${
                theme === 'dark' ? 'opacity-0 scale-0' : 'opacity-90 scale-100'
              }`}
            />

            {/* Spring-Animated Sliding Thumb */}
            <motion.span
              layout
              animate={{ x: theme === 'dark' ? 28 : 0 }}
              transition={{ type: 'spring', stiffness: 520, damping: 32 }}
              className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-md ${
                theme === 'dark'
                  ? 'bg-slate-900 text-indigo-300 ring-1 ring-indigo-400/40'
                  : 'bg-white text-amber-500 ring-1 ring-amber-200/80'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.span
                    key="moon"
                    initial={{ rotate: -60, scale: 0.6, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 60, scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center justify-center"
                  >
                    <Moon className="w-3.5 h-3.5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ rotate: 60, scale: 0.6, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -60, scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center justify-center"
                  >
                    <Sun className="w-3.5 h-3.5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.span>
          </button>

          {/* GitHub Profile */}
          <a
            href="https://github.com/shivakkumar-ai-llm-researcher"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-all font-medium"
          >
            <Github className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>GitHub</span>
          </a>

          {/* Connect Button */}
          <a
            href="#contact"
            className="px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5 active:scale-95 shadow-sm rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 transition-all"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full clay-btn text-slate-700 dark:text-slate-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 glass-panel rounded-3xl p-5 shadow-xl flex flex-col gap-3 md:hidden z-50">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-full text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-slate-400">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08] flex items-center gap-2">
            <a
              href="https://github.com/shivakkumar-ai-llm-researcher"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-full glass-pill text-center text-xs text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold text-center flex items-center justify-center gap-1"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
