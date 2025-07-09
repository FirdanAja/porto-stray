/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        limeSoft: "#B8E979",
        limeStrong: "#81C627",
        greenDark: "#243A07",
        limeLight: "#DCF4BC",
        graySoft: "#F7F7F7",
      },
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scrollX: "scrollX 40s linear infinite",
      },
    },
  },
  plugins: [],
};
