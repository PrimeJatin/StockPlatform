/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all files in src
  ],
  darkMode: 'class', // Enable dark mode using a 'dark' class on the HTML tag
  theme: {
    extend: {},
  },
  plugins: [],
}