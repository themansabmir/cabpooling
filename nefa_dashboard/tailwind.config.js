/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        container: "#ffffff",
        sidebar: "#fff",
        fontBg: '#282e38',
        mainHeading: "#282e38",
        page: "#f7f7f9",
        navLinks: "#a4a9b8",
        card: "#313844",
        golden: "ffbd4a",
        bars: "#188ae2",
        blue: '#2E90EF',
        red: '#EC4A5E',
        primary: "rgba(46, 144, 239, 1)", //blue
        greyBg: "rgba(247, 250, 253, 1)", //grey
        black: "#333333", // Black
        secondary: "#C3C3C3"
      },
      fontFamily: {
        primary: ["Figtree", "Montserrat", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

