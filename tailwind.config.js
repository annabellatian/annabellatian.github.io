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
      'sm': '640px',
      // => @media (min-width: 476px) { ... }
    
      'md': '768px',
      // => @media (min-width: 768px) { ... }
    
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
    
      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

