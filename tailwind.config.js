/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "color-4": "rgba(30, 30, 30, 0.5)",
        "color-2": "#1e1e1e",
        gold: "#f6c000",
        gainsboro: "#d9d9d9",
        gray: {
          "100": "#000e32",
          "200": "rgba(30, 30, 30, 0.75)",
        },
        black: "#000",
        darkslateblue: "#082763",
      },
      fontFamily: {
        poppins: "Poppins",
        "pragati-narrow": "'Pragati Narrow'",
        inter: "Inter",
        "jacques-francois": "'Jacques Francois'",
        galada: "Galada",
      },
      borderRadius: {
        xl: "20px",
        "481xl": "500px",
      },
    },
    fontSize: {
      "21xl": "40px",
      "29xl": "48px",
      "77xl": "96px",
      "5xl": "24px",
      "45xl": "64px",
      "13xl": "32px",
      "17xl": "36px",
      xl: "20px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
