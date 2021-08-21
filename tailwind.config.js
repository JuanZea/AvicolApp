const {colors: defaultColors} = require('tailwindcss/defaultTheme');
const customColors = require("tailwindcss/colors");

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
          ...defaultColors,
          'av-10': '#FFBA08',
          'av-20': '#FAA307',
          'av-30': '#F48C06',
          'av-40': '#E85D04',
          'av-50': '#DC2F02',
          'av-60': '#D00000',
          'av-70': '#9D0208',
          'av-80': '#6A040F',
          'av-90': '#370617',
          'av-100': '#03071E',
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
