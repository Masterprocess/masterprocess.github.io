/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./gatsby-ssr.js",
    "./gatsby-browser.js",
  ],
  theme: {
    extend: {
      colors: {
        bauhausRed: "#d04b41",
        bauhausYellow: "#f4d35e",
        bauhausBlue: "#577590",
        bauhausBlack: "#2f2f2f",
      },
      fontFamily: {
        sans: ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
