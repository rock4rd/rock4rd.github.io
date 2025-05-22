module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          300: '#60a5fa',
          400: '#3b82f6',
        },
        gray: {
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
          100: '#f3f4f6',
        },
        green: {
          600: '#22c55e',
        },
        purple: {
          600: '#a855f7',
        },
        yellow: {
          600: '#facc15',
        },
        red: {
          600: '#ef4444',
        },
        indigo: {
          600: '#6366f1',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};