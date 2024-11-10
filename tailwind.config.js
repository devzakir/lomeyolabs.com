/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        heading: ['var(--font-lexend)'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: "#E2EFFE",
          100: "#C9E2FD",
          200: "#93C5FB",
          300: "#5DA8F8",
          400: "#2389F6",
          500: "#096DD9",
          600: "#0757AB",
          700: "#064384",
          800: "#042C58",
          900: "#02162C",
          950: "#010A14"
        },
        dark: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          lighter: '#334155',
        },
        light: {
          DEFAULT: '#f8fafc',
          dark: '#f1f5f9',
          darker: '#e2e8f0',
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        section: '6rem',
        'section-md': '8rem',
        'section-lg': '10rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}