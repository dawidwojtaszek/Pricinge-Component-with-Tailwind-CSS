/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      veryLightGrayishBlue: "hsl(240, 78%, 98%)",
      lightGrayishBlue: "hsl(234, 14%, 74%)",
      grayishBlue: "hsl(233, 13%, 49%)",
      darkGrayishBlue: "hsl(232, 13%, 33%)",
      gradientLightBlue: "hsl(236, 72%, 79%)",
      gradientBlue: "hsl(237, 63%, 64%)",
      black: "#000",
      white: "#fff",
    },
    screens: {
      sm: "480px",
      md: "750px",
      lg: "1050px",
    },
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
