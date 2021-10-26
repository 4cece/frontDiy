const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: [
      './**/*.html',
      // './src/**/*.js',
    ],
  },
  darkmode: false,

  theme: {
    
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        amatic: ["Amatic SC", "cursive"]
    },
    colors: {
     purple: '#53599a',
     white: '#E5F9E0',
     green: {
       light: '#A3F7B5',
       dark: '#0B6E4F'
     }
    }
  },

  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },

  // plugins: [require("@tailwindcss/forms")],
};