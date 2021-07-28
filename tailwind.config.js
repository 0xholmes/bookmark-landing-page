module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267df",
        "bookmark-red": "#fa5959",
        "bookmark-blue": "#242a45",
        "bookmark-grey": "#9194a2",
        "bookmark-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screen: {
        lg: "1124",
        xl: "1124",
        "2xl": "1124",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
