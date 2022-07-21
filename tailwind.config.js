module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      width: {
        215: "215px",
        357: "357px",
        557: "557px",
      },
      minWidth: {

      },
      height: {

      },
      inset: {

      },
      spacing: {

      },
      flex: {

      },
      lineHeight: {

      },
      zIndex: {

      },
    },
    screens: {
      lg: { max: "1800px" },
      md: { max: "990px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
};
