const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ['Samarkan', 'sans-serif'],
    },
  },
  plugins: [],
})