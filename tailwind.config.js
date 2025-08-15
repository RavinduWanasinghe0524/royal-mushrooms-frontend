// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",    // Scan files in the 'pages' directory
    "./components/**/*.{js,ts,jsx,tsx}", // Scan files in the 'components' directory (if you create any)
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Define 'inter' as a custom font family using the Inter font
      },
    },
  },
  plugins: [],
};