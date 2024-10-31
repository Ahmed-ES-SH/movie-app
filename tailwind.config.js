/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        main: "#131720",
        secendary: "#151f30",
        main_blue: "#2f80ed",
        light: "#eee",
      },
    },
  },
  plugins: [],
};
