/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "dark": "#1a202c",
        'medium': '#293245',
        'white': '#fcfcfc',
        'text': '#646464',
      },
    },
  },
  plugins: [],
};
