/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#092034",
        secondary: "#537895",
        paragraph: "#A1A1AA",
      },
      screens: {
        // vsm: "450px",
      },
    },
  },
  plugins: [],
};
