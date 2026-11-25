'use client';

import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import Logo from './Logo';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#systems' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
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

      const sections = ['about', 'systems', 'experience', 'skills', 'contact'];
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
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full clay-btn text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-blue-600 -rotate-12 transition-transform hover:rotate-0" />
            )}
          </button>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-all font-medium"
          >
            <Download className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>CV</span>
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
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-full glass-pill text-center text-xs text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
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
