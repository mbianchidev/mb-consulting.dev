const colors = require("tailwindcss/colors");
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
// colors: { => DO NOT use this, it will override the default colors and you will have to redefine them all somehow lol
//   mb_blue: 
//   { 
//     100: "#3B82F6",
//     200: "#02058F",
//     300: "#050e96",
//     400: "#02044A",
//   },
// },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },

  plugins: [
    'tailwindcss/nesting',
  ],
};
