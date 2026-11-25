import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const boxSize = size === 'sm' ? 'w-7 h-7 rounded-xl' : 'w-9 h-9 rounded-2xl';
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <div
      className={`${boxSize} bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-600/25 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105`}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconSize}
        aria-hidden="true"
      >
        {/* Geometric S path */}
        <path
          d="M21.5 10.5C21.5 8.29086 19.2614 6.5 16.5 6.5H13C10.5147 6.5 8.5 8.29086 8.5 10.5C8.5 12.7091 10.5147 14.5 13 14.5H19C21.4853 14.5 23.5 16.2909 23.5 18.5C23.5 20.7091 21.4853 22.5 19 22.5H15.5C12.7386 22.5 10.5 20.7091 10.5 18.5"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* AI neural node accent */}
        <circle cx="23.5" cy="8.5" r="2.2" fill="currentColor" />
        <circle cx="8.5" cy="23.5" r="2.2" fill="currentColor" fillOpacity="0.85" />
      </svg>
    </div>
  );
}
