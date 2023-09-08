/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      black: "#000",
      blue: "#2639ED",
      "blue-light": "#F4F9FF",
      "pattens-blue": "#DAE9FF",
      "zircon-blue": "#F1F7FF",
      grey: "#757575",
      "grey-dark": "#565656",
      "grey-light": "#757575",
      yellow: "FFF5DB",
      "yellow-light": "#FFF7E3",
      pink: "#FF007A",
      "pink-light": "#FFF2F8",
      "green-light": "#DEFFEE",
    },
    fontFamily: {
      sans: ["Averta Demo PE Cutted Demo", "sans-serif"],
    },
    extend: {
      spacing: {
        16: "1rem",
        20: "1.25rem",
        30: "1.875rem",
        40: "2.5rem",
        60: "3.75rem",
        70: "4.375rem",
        80: "5rem",
        120: "7.5rem",
      },
      borderRadius: {
        32: "2rem",
        40: "2.5rem",
        60: "3.75rem",
        75: "4.688rem",
        100: "6.25rem",
        200: "12.5rem",
      },
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2.5rem",
    },
  },
  plugins: [],
};
