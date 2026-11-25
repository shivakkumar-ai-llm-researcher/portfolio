'use client';

import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Download,
  ArrowUpRight,
  Send,
  Linkedin,
  Github,
  MessageSquare
} from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const emailAddress = 'shivakkumarc@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderMessage.trim()) return;

    const subject = encodeURIComponent(`Inquiry from ${senderName || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hi Sivakumar,\n\n${senderMessage}\n\nFrom: ${senderName} (${senderEmail})`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    setSentStatus('Message prepared! Launching your mail client...');
    setTimeout(() => setSentStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-semibold mb-3 shadow-sm shadow-blue-500/20">
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight">
          Let&apos;s build something together.
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5 max-w-lg">
          Open to opportunities in Agentic AI, Multi-Agent Systems, and Full-Stack Engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links & Resume */}
        <div className="lg:col-span-5 flex flex-col gap-3.5">
          {/* Email Copy Card */}
          <div className="clay-card p-5">
            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
              Email Directly
            </span>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/[0.06] mb-2">
              <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 truncate select-all font-medium">
                {emailAddress}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg clay-btn text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors ml-2 shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-1">
              Alternate: <span className="select-all text-slate-700 dark:text-slate-300 font-medium">sivakumarcgbtech@gmail.com</span>
            </p>
            {copied && (
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                <Check className="w-3.5 h-3.5" />
                Copied to clipboard!
              </p>
            )}
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3.5">
            <a
              href="https://www.linkedin.com/in/shivakkumarg"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-card p-4 group flex flex-col justify-between hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <Linkedin className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-xs block">LinkedIn</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate block">/in/shivakkumarg</span>
              </div>
            </a>

            <a
              href="https://github.com/shivakkumar-ai-llm-researcher"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-card p-4 group flex flex-col justify-between hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <Github className="w-4 h-4 text-slate-800 dark:text-white group-hover:scale-110 transition-transform" />
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-xs block">GitHub</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate block">@Shiva-kkumar</span>
              </div>
            </a>
          </div>

          {/* Download Resume Card */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="clay-card p-4 flex items-center justify-between group hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/25">
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-xs block">Official Resume (CV)</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">PDF · Verified Experience & Projects</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-blue-600" />
          </a>
        </div>

        {/* Right Column: Quick Message Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSendMessage}
            className="glass-panel p-6 sm:p-7 rounded-2xl space-y-3.5"
          >
            <div className="flex items-center gap-2 pb-2.5 border-b border-slate-200 dark:border-white/[0.08]">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span className="text-xs text-slate-700 dark:text-slate-300 font-semibold">Send a Direct Message</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Chen"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1 font-medium">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1 font-medium">Message</label>
              <textarea
                required
                rows={3}
                placeholder="How can I help with your project or team?"
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 shadow-md shadow-blue-500/25 transition-all"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            {sentStatus && (
              <p className="text-xs text-center text-emerald-600 dark:text-emerald-400 pt-1 font-medium">
                {sentStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
