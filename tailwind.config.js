/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    aspectRatio: {
      '4/3': '4 / 3',
    },
    filter: "hue-rotate(3.142rad);",
    
    fontFamily: {
  

      'mono': ['ONEPIECE'],
      'sfmono': ['']

    },
    colors: {
      'purple': '#7e5bef'
    },
    extend: {

    }
  },
  plugins: [],
}


