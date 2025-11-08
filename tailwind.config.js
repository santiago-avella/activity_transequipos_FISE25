/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        blueTransEquipos: "#004978",
        orangeTransEquipos: "#D87814"
      }
    },
  },
  plugins: [],
}

