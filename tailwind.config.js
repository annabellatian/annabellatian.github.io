/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    './src/**/*.js',
  ],
  theme: {
    colors: {
      'offWhite': '#FCF9ED',
      'white': 'white',
      'black': 'black',
      'textColor': '#1F1F1F',
      'darkGray': '#1F1F1F',
      'pink': '#EED2DE',
      'lightBlue': '#7FAAC7',
      'darkBlue': '#282853'
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

