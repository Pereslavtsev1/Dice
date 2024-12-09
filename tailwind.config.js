/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#323437",
        secondary: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
