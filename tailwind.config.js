/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005FCC',
        secondary: '#0B0C10',
        accent: '#C5C6C7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
    float: 'float 6s ease-in-out infinite',
    'float-slow': 'float 8s ease-in-out infinite',
    'float-delayed': 'float 6s ease-in-out infinite 1.5s',
  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-12px)' },
    },
  },
    },
  },
  plugins: [],
}