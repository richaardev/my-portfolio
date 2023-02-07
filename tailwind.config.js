/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      "sans": ["Fira Code", "monospace"]
    },
    extend: {
      maxHeight: {
        128: "45rem"
      }
    },
  },
  plugins: []
}
