/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-color': '#175941',
        'text-color': '#D6BE87',
        'category': '#338064',
        'banner': '#297257',

      },
    },
  },
  plugins: [require("daisyui")],
}
