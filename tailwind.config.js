


export default {
  theme: {
    
    extend: {},
  },
  plugins: [require('tailwindcss-motion')],
  
};

module.exports = {
  // ...


  plugins: [
    require('tailwindcss-animated')
  ],
  
}

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};