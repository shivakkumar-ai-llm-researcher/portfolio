'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const EASE_CURVE = [0.22, 1, 0.36, 1] as const;

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 origin-left z-[60] pointer-events-none"
    />
  );
}

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function MotionReveal({
  children,
  className = '',
  delay = 0,
  yOffset = 24,
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: EASE_CURVE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MotionStaggerGridProps {
  children: React.ReactNode;
  className?: string;
}

export function MotionStaggerGrid({ children, className = '' }: MotionStaggerGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MotionStaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function MotionStaggerItem({ children, className = '' }: MotionStaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.45, ease: EASE_CURVE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
