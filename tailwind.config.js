const {colors: defaultColors} = require('tailwindcss/defaultTheme');
const customColors = require("tailwindcss/colors");

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
          ...defaultColors,
          'av-10': '#FDF9E8',
          'av-50': '#FFBA08',
          'av-100': '#FAA307',
          'av-200': '#F48C06',
          'av-300': '#E85D04',
          'av-400': '#DC2F02',
          'av-500': '#D00000',
          'av-600': '#9D0208',
          'av-700': '#6A040F',
          'av-800': '#370617',
          'av-900': '#03071E',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
