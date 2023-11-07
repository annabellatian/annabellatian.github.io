/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
  ],
  theme: {
    colors: {

      'lightGray': '#D7D6D6',
      'white': 'white',
      'black': 'black',
      'darkGreen': '#36413E',
      'darkGray': '#5D5E60'
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
    
      'md': '768px',
      // => @media (min-width: 768px) { ... }
    
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
    
      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

