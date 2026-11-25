import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const boxSize = size === 'sm' ? 'w-7 h-7 rounded-xl' : 'w-9 h-9 rounded-full';

  return (
    <div
      className={`${boxSize} overflow-hidden shadow-md shadow-blue-600/25 ring-1 ring-white/25 transition-transform duration-300 group-hover:scale-105 shrink-0`}
    >
      <img
        src="/logo.jpg"
        alt="Sivakumar"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
