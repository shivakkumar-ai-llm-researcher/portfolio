'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    if (!finePointer.matches) return;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      setVisible(true);

      const target = e.target as HTMLElement | null;
      const interactive = Boolean(
        target?.closest('a, button, input, textarea, select, [role="button"], .clay-btn')
      );
      setIsPointer((prev) => (prev !== interactive ? interactive : prev));
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform transition-opacity duration-150 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      {/* Subtle interactive halo on clickable elements */}
      <div
        className={`absolute -top-3 -left-3 w-7 h-7 rounded-full border border-blue-500/60 bg-blue-500/10 transition-all duration-200 ${
          isPointer ? 'scale-110 opacity-100' : 'scale-50 opacity-0'
        }`}
      />

      {/* Crisp, zero-lag custom vector pointer */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`drop-shadow-[0_2px_6px_rgba(37,99,235,0.45)] transition-transform duration-100 origin-top-left ${
          isPressed ? 'scale-90' : isPointer ? 'scale-110' : 'scale-100'
        }`}
      >
        <path
          d="M4 3L19.5 11.2L12.4 13.4L9.2 20.2L4 3Z"
          fill={isPointer ? '#2563EB' : '#3B82F6'}
          stroke="#FFFFFF"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
