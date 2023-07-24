/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "custom-orange": "hsl(32, 100%, 50%)",
        "custom-blue": "hsl(217.69,73.58%,20.78%)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        open_sans: ["Oswald", "sans-serif"],
      },
      backgroundImage: {
        heroImage:
          "linear-gradient(0deg, rgba(25,36,56,0.77), rgba(25,36,56,0.77)), url('../images/Geotech2.jpg')",
        customBgImage: "linear-gradient(0deg, rgba(25,36,56,0.77), rgba(25,36,56,0.77)), url('../images/img3.jpg')"
      },
    },
  },
  plugins: [],
};
