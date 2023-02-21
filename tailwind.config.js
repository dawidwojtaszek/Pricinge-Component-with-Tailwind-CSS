/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      veryLightGrayishBlue: "hsl(240, 78%, 98%)",
      lightGrayishBlue: "hsl(234, 14%, 74%)",
      grayishBlue: "hsl(233, 13%, 49%)",
      darkGrayishBlue: "hsl(232, 13%, 33%)",
      black: "#000",
      white: "#fff",
    },
    screens: {
      sm: "480px",
      md: "768px",
    },
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
