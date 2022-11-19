/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        rubik: "Rubik Glitch",
        Buljirya: "Buljirya",
      },
      animation: {
        trans: 'animate 5s linear infinite',
      }
    },
  },
  plugins: [],
}