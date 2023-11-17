/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0EAC55",
          secondary: "#1C4467",
          accent: "#C5952F",
          neutral: "#54142c",
          "base-100": "#ffffff",
          
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
