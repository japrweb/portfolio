/** @type {import('tailwindcss').Config} */
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-white': 'inset 0 0 0 9px rgba(255, 255, 255, 0.3)',
      },
    },
    animation: {
      'myAnimation': 'myAnimation 3s ease-in-out infinite',
    },
    keyframes: {
      myAnimation: {
        '0%': {
          borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
        },
        '50%': {
          borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%',
        },
        '100%': {
          borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
        },
      },
    },
  },
  plugins: [
    aspectRatio,
    // ...otros plugins
  ],
};
