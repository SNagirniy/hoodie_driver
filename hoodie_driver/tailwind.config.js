/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        bodyBg: '#1F2224',
        textPrim: '#FFFFFF',
        textSec: '#E0CC1B',
        acsBlue: '#2B96EA',

        
      },
    },
  },
  plugins: [],
};
