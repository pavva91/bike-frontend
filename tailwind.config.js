/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
  content: ['./node_modules/flowbite/**/*.js', 'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'],
}
