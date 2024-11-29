/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "primary-green": "#B1CB53",
        "primary-pink": "#C74478",
        "primary-beige": "#F7F0DE",
        "primary-brown": "#442A1B",
        "secondary-green": "#356E41",
        "secondary-pink": "#F797BC",
        "secondary-beige": "#ECE1C7",
      },
      fontFamily: {
        chopin: ["Chopin-Trial", "serif"], // Add your custom fonts
        birdgo: ["Birdgo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
