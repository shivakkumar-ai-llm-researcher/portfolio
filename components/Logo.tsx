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
        {/* Sleek interlocking geometric S-ribbon */}
        <path
          d="M22.5 7.5H13.5L9.5 11.5L13.5 15.5H20.5L22.5 13.5"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 24.5H18.5L22.5 20.5L18.5 16.5H11.5L9.5 18.5"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.92"
        />
      </svg>
    </div>
  );
}
