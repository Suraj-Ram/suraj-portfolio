const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        gumnetal: "#16262e",
        charcoal: "#2e4756",
        "cornflower-blue": "#5C95FF",
        "blue-gray": "#E8F1F2",
        "my-red": "#FF3A20",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
