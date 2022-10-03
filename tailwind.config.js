/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'darkEletricBlue': '#646E78',
      'Manatee': '#8D98A7',
      'Almond': '#DCCCBB',
      'Sunray': '#EAB464',
      'Cafe': '#A7754D'

    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
