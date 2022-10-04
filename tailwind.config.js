/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.js'
  ],
  theme: {
    colors: {
      'darkEletricBlue': '#646E78',
      'manatee': '#8D98A7',
      'almond': '#DCCCBB',
      'sunray': '#EAB464',
      'cafe': '#A7754D'

    },
    fontFamily: {
      karla: ["Karla", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      alkalami: ["Alkalami", "serif"]
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
