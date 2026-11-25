/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        sapphire: {
          DEFAULT: '#2563EB',
          bright: '#38BDF8',
          glow: 'rgba(37, 99, 235, 0.25)',
        },
        coral: {
          DEFAULT: '#F43F5E',
          bright: '#FB7185',
          soft: '#FFE4E6',
          glow: 'rgba(244, 63, 94, 0.25)',
        },
        mint: {
          DEFAULT: '#10B981',
          bright: '#34D399',
          glow: 'rgba(16, 185, 129, 0.25)',
        },
        amber: {
          DEFAULT: '#F59E0B',
          bright: '#FBBF24',
          glow: 'rgba(245, 158, 11, 0.25)',
        },
        canvas: {
          light: '#F8FAFC',
          dark: '#080C16',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'clay-light': '9px 9px 18px #d1d9e6, -9px -9px 18px #ffffff, inset 0 1px 1px rgba(255,255,255,0.8)',
        'clay-light-pressed': 'inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff',
        'clay-btn-light': '6px 6px 14px #cbd5e1, -6px -6px 14px #ffffff, inset 0 1px 1px rgba(255,255,255,0.9)',
        'clay-dark': '9px 9px 20px #04060c, -7px -7px 16px rgba(255,255,255,0.03), inset 0 1px 1px rgba(255,255,255,0.08)',
        'clay-dark-pressed': 'inset 5px 5px 12px #04060c, inset -4px -4px 10px rgba(255,255,255,0.04)',
        'clay-btn-dark': '6px 6px 16px #04060c, -4px -4px 12px rgba(255,255,255,0.03), inset 0 1px 1px rgba(255,255,255,0.1)',
        'clay-brand': '0 10px 25px -4px rgba(99, 102, 241, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
        'clay-coral': '0 10px 25px -4px rgba(244, 63, 94, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
        'clay-mint': '0 10px 25px -4px rgba(16, 185, 129, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
        'clay-amber': '0 10px 25px -4px rgba(245, 158, 11, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};
