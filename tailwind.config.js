/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "300p": "300px",
        "400p": "400px",
        "500p": "500px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        scale: "scale 2s ease infinite",
        moveUp: "moveUp .3s ease forwards 1",
      },
      keyframes: {
        scale: {
          "0%, 100%": { scale: "1", opacity: 0.6 },
          "50%": { scale: "1.05", opacity: 1 },
        },
        moveUp: {
          from: {
            transform: "translateY(8rem)",
          },
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
