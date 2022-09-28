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
      transitionDelay: {
        50: "50ms",
        60: "60ms",
        70: "70ms",
        80: "80ms",
        90: "90ms",
      },
      gridTemplateColumns: {
        custom_4: "repeat(4, minmax(5px, 1fr))",
        custom_12: "repeat(12, minmax(5px, 1fr))",
      },
      gridColumnEnd: {
        span_3: "span 3",
        span_4: "span 4",
        span_6: "span 6",
        span_12: "span 12",
      },
    },
  },
  plugins: [],
};
