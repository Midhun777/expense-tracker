/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        textCol: '#100305',
        textColLight: '#2a2828',
        bgCol: '#fef7f8',
        priRed: '#df3952',
        secGreen: '#9fec88',
        secGreenDark:'#89d973',
        accGreen: '#50e38f',
      },
    },
  },
  plugins: [],
}

