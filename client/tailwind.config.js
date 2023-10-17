/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#687EFF',
        'secondary': '#F39F5A',
        'dark-primary': '#EEEEEE',
        'dark-secondary': '#CEDEBD'
      },
    },
  },
  plugins: [],
}