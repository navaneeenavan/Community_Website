/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        oswald: ["'Oswald'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        jetbrains: ["'JetBrains Mono'", "monospace"]
      },
    },
  },
  plugins: [],
}

