/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#644F9C",
          secondary: "#F15F3A",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
