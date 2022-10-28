/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        "ice-cream-bg": "url('../public/assets/background.jpeg')",
        "logo": "url('../public/assets/logo.svg')",
      }
    },
  },
  plugins: [],
}
