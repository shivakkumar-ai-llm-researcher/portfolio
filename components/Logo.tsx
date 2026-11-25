import React from 'react';

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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconSize}
        aria-hidden="true"
      >
        {/* Crisp symmetric 4-point AI star */}
        <path
          d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
