/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pinkColor: `#B43FEB`,
        grayTextColor: `#78828A`,
        lightGrayTextColor: `#9CA4AB`,
        ligthModeBorderColor: `#E9EBED`,
        blackTextColor: `#171725`,
        inputBackgroundColor: `#F9F9F9`,
        darkModaFirstColor: `#0D0C0F`,
        darkModaSecondColor: `#1A161F`,
      },
    },
  },
  plugins: [],
};
