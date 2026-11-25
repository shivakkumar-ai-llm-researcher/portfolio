import React from 'react';
import { Orbit } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const boxSize = size === 'sm' ? 'w-7 h-7 rounded-xl' : 'w-9 h-9 rounded-full';
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-[18px] h-[18px]';

  return (
    <div
      className={`${boxSize} bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-600/25 ring-1 ring-white/25 transition-transform duration-300 group-hover:scale-105`}
    >
      <Orbit className={iconSize} strokeWidth={2.2} />
    </div>
  );
}
