/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");



module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
});

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      move1: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(20px, 20px)' },
      },
      move2: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(-20px, -20px)' },
      },
      move3: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(-40px, -40px)' },
      },
    },
    animation: {
      move1: 'move1 4s infinite',
      move2: 'move2 3s infinite',
      move3: 'move2 3s infinite',

    },
  },
  plugins: [],
};
