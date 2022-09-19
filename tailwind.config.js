/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Barlow", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        red: "#CD163F",
        blue: "#00548F",
        blue2: "#2B3543",
        black: "#000000",
        black2: "#29323C",
        white: "#ffffff",
      },
      margin: {
        section: "80px",
        sectionMB: "50px",
      },
      spacing: {
        section: "80px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};
