/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors:{
            'ttext':'#0F1A1C',
            'ntext':'#2A3C42'

        }
    },
  },
  plugins: [],
}

