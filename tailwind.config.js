/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f6ff',
          100: '#e0ecff',
          200: '#c0daff',
          300: '#9ac2ff',
          400: '#70a2ff',
          500: '#4981ff',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'html': { fontSize: '16px' },
        'h1, h2, h3, h4, h5, h6': { lineHeight: '1.2' },
        'p': { lineHeight: '1.5' },
      })
    },
  ],
};