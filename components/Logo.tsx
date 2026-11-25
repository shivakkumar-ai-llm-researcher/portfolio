import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const boxSize = size === 'sm' ? 'w-7 h-7 rounded-xl p-1' : 'w-9 h-9 rounded-full p-1';

  return (
    <div
      className={`${boxSize} bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/25 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105 shrink-0`}
    >
      <img
        src="/logo-mark.png"
        alt="Sivakumar"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
