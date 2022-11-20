/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%)",
        lightDarkBlue: "hsl(213, 19%, 18%)",
        darkBlue: "hsl(213, 19%, 13%)",
        veryDarkBlue: "hsl(216, 12%, 8%)"
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"]
      },
      animation: {
        bounceTwice: 'bounce 1s 2'
      }
    },
  },
  plugins: [],
}
