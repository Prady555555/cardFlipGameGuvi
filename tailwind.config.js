/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};

//  npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
