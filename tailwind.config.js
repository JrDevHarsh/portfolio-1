/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#3F7EE8",
        dark_blue: "#1A73E8",
        green: "#319F4F",
        yellow: "#EEB205",
        red: "#DE4032",
        white: "#FFFFFF",
        bright_blue: "#F8F9Fa",
        gray: "#DADCE0",
        dark_gray: "#5F6368",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};
