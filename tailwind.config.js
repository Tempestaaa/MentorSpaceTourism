/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B0D17",
        sub: "#D0D6F9",
        white: "#FFFFFF",
      },
      fontFamily: {
        bellefair: '"Bellefair", serif',
        barlow: '"Barlow Condensed", sans-serif',
      },
      letterSpacing: {
        heading5: "4.75px",
        subHeading2: "2.35px",
        navText: "2.7px",
      },
      keyframes: {
        btn: {
          "0%": { "background-color": "transparent" },
          "50%": { "background-color": "rgba(255, 255, 255, 0.04)" },
          "70%": { "background-color": "rgba(255, 255, 255, 0.1)" },
          "100%": { "background-color": "rgba(255, 255, 255, 0.2)" },
        },
      },
      animation: {
        btn: "btn 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
