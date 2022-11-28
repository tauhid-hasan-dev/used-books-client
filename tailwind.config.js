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
        'category': '#F1E8D2',
        'banner': '#FDF8EE',

      },
    },
  },
  plugins: [require("daisyui")],
}
