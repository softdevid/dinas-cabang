const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "2xl": "1400px",
        "3xl": "1536px",
      },
    },
    screens: {
      "2xs": "360px",
      xs: "475px",
      ...defaultTheme.screens,
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
