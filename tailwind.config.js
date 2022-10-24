/** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   daisyui: {
//     themes: ["light"],
//   },
//   plugins: [require("daisyui")],
// };

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        skillnaotheme: {
          primary: "#1A6241",
          secondary: "#FFB357",
          accent: "#37cdbe",
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")]
}