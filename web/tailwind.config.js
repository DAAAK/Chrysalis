/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      objectPosition: {
        'center-bottom': 'center bottom',
        'center-top': 'center top',
        'center-left': 'center left',
        'center-right': 'center right',
      },
    },
  },
  plugins: [],
};
