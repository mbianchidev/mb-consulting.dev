const colors = require("tailwindcss/colors");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
      colors: {
          mb_primary: "#02058F",
          mb_secondary: "#2376C7",
          mb_tertiary: "#00B2CA",
          mb_quaternary: "#33A1FD",
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },

  plugins: [
    '@tailwindcss/postcss/nesting',
  ],
};
