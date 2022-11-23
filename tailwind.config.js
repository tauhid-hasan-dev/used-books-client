/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-color': '#2D333B',
        'bg-login-color': '#22272E',
        'text-color': '#FFE0B3',

      },
    },
  },
  plugins: [require("daisyui")],
}
