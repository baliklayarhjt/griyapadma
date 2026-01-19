/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C9A24D",        // accent premium
        brown: "#2E1F1F",       // text / footer
        ivory: "#F9F8F6",       // background elegan (putih mahal)
        softGray: "#E5E5E5"     // border / divider
      }
    }
  },
  plugins: []
}
