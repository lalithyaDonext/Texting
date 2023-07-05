/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  './src/**/*.{ts,tsx}',],
  theme: {
    extend: {
      backgroundColor: ['responsive', 'hover'],
      textColor: ['responsive', 'hover'],
    },
  },
  plugins: [],
}

