'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useSpring(cursorX, { stiffness: 320, damping: 28, mass: 0.4 });
  const ringY = useSpring(cursorY, { stiffness: 320, damping: 28, mass: 0.4 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    if (!finePointer.matches) return;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, input, textarea, select, [role="button"], .clay-btn'
      );
      setIsPointer(Boolean(interactive));
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
  }, [cursorX, cursorY]);

  if (!enabled || !visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      {/* Trailing Outer Halo Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPressed ? 0.8 : isPointer ? 1.55 : 1,
          borderColor: isPointer ? 'rgba(59, 130, 246, 0.85)' : 'rgba(99, 102, 241, 0.45)',
          backgroundColor: isPointer ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.03)',
        }}
        transition={{ duration: 0.16, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border backdrop-blur-[1px]"
      />

      {/* Precision Inner Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPressed ? 0.65 : isPointer ? 1.25 : 1,
        }}
        transition={{ duration: 0.12 }}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 shadow-[0_0_10px_rgba(59,130,246,0.75)]"
      />
    </div>
  );
}
