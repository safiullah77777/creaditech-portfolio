/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadowImage: "0px 0px 30px rgba(26, 26, 26, 0.2)",
        cardShadow: "8px 8px 0px #1E1E1E",
        megaMenu: "0px 10px 10px rgba(0, 0, 0, 0.3)",
      },
      backgroundColor: {
        button: "rgba(30, 30, 30, 0.37)",
        yellow: "rgba(255, 225, 0, 1)",
        primary: "#2B2B2B",
        black: "rgb(18,18,18)",
        inputs: " rgb(198 206 211) !important",
        card: "rgba(91, 94, 113, 0.8)",
      },
      height: {
        64: "6.4rem",
        "80vh": "80vh",
        25: "2.5rem",
        60: "6rem",
        450: "45rem",
        160: "16rem",
        380: "38rem",
      },
      width: {
        130: "1.3rem",
        500: "52rem",
        320: "32rem",
        25: "2.5rem",
        380: "38rem",
        170: "17rem",
        120: "12rem",
        160: "16rem",
      },
      maxWidth: {
        500: "52rem",
        570: "57rem",
        760: "76rem",
      },
      fontSize: {
        0: "0rem",
        1: "0.1rem",
        16: "1.6rem",
        18: "1.8rem",
        30: "3rem",
        65: "6.5rem",
        35: "3.5rem",
        20: "2rem",
        45: "4.5rem",
        150: "15rem",
        28: "2.8rem",
      },
      colors: {
        yellow: "rgba(255, 225, 0, 1)",
        "light-grey": "rgba(198, 206, 211, 1)",
        black: "#1E1E1E",
        "white-0.7": "rgba(255,255,255,0.7)",
        "black-0.35": "rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      lineHeight: {
        85: "85%",
        130: "130%",
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
    },

    borderRadius: {
      96: "9.6rem",
      10: "1rem",
      5: "0.5rem 0 0 0.5rem",
      "05": "0 0.5rem 0.5rem 0",
      full: "100%",
      25: "2.5rem",
    },
    backgroundImage: {
      "bg-image2": "url('/assets/images/backgrounds/service-bg.png')",
      "gradient-bg": `background-image: linear-gradient(
        180.94deg,
        #1e1e1e 7.76%,
        rgba(30, 30, 30, 0) 52.42%
      );`,
    },
  },
  plugins: [],
};
