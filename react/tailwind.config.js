/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        'bg1-500': theme('colors.bg1-500', '#FAF4D3'),
        'bg2-500': theme('colors.bg2-500', '#F0BEB0'),
      }),
      colors: {
        text: "#9b9b9b",
        orange: "#FB644B",
        brown: "#C66D54",
        lightbrown: "#C99879",
        light_brown: "#F6BE9A",
        bg1: "#F3C3B4",
        bg2: "#F0BEB0",
        
      },
    },
  },
  plugins: [],
}

