/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        dark: "#05070D",
        emeraldA: "#30D086"
      },
      boxShadow: {
        soft: "0 15px 40px rgba(0,0,0,.25)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      },
      backgroundImage: {
        mesh: "radial-gradient(1200px 800px at 10% 10%, #0e1a2b 0%, #05070d 60%)"
      }
    }
  },
  plugins: []
}
