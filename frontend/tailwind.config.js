/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#e85c5c", light: "#f28b8b", dark: "#c94040" },
        secondary: { DEFAULT: "#fff5f5", dark: "#ffe0e0" },
        accent: "#ff9a9a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
