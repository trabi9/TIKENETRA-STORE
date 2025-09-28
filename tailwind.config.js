/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: "#ff6600",
        brandGreen: "#28a745",
      }
    },
  },
  plugins: [],
}
