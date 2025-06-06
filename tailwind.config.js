/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#02f78d",
      },
      fontFamily: {
        techno: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 