module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          greenBg: '#06202A',
        },
      },
      screens: {
        '3xl': '2000px',
      },
      // textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  
  },
  variants: {
    extend: {
      transitionProperty: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
      animation: ['group-hover'],
      // Icon: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
