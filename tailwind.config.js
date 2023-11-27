/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
  ],
  theme: {
    colors: {
      'offWhite': '#FFF5E8',
      'white': 'white',
      'black': 'black',
      'textColor': '#0F0605',
      'darkGray': '#5D5E60',
      'yellow': '#FFF2B9',
      'lilac': '#C198C3'
    },
    screens: {
      'sm': '550px',
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
      },
      fontFamily: {
        'qestero': ['Qestero','Roboto'],
        'amerton': ['Amerton', "Segoe UI"],
        'bekinder': ['Bekinder', 'Roboto'],
        'bekinderItalic': ['BekinderItalic', 'Roboto'],
        'bekinderOut': ['BekinderOutline', 'Roboto'],
        'bodyText': ['IBMPlexSans', 'Roboto'],
        'cardif': ['Cardif', 'Roboto']
        // 'amerton-italic': ['AmertonI','Roboto']
      },
    },
  },
  plugins: [],
}

