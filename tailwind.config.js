/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        inter: "Inter",
        lexendDeca: "Lexend Deca",
      },
      colors: {
        mainBackGround: "hsl(233, 47%, 7%)",
        cardBackground: "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
        mainHeadingStats: "hsl(0, 0%, 100%)",
        mainParagraph: "hsla(0, 0%, 100%, 0.75)",
        statHeadings: "hsla(0, 0%, 100%, 0.6)",
      },
    },
  },
  plugins: [],
}
