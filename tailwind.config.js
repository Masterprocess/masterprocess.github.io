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
        bauhausRed: '#ff0000',
        bauhausYellow: '#ffff00',
        bauhausBlue: '#0000ff',
        bauhausBlack: '#000000',
      },
    },
  },
  plugins: [],
}

