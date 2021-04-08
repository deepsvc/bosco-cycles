const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js', './tailwind.config.js'),
    require("autoprefixer")
  ]
}
