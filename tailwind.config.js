/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      width: {
        1100: '1100px',
      },
      backgroundColor: {
        primary: '#F5F5F5',
        secondary1: '#1266dd',
        secondary2: '#f23859',
        modalOverlay: 'rgba(0, 0, 0, 0.5)',
      },
      maxWidth: {
        600: '600px',
        1100: '1100px',
      },
    },
  },
  plugins: [],
};
