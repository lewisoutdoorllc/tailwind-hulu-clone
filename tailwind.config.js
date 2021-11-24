module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          greenBg: '#06202A',
        },
      },
      // textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
      animation: ['group-hover'],
      // Icon: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
