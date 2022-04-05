const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem !important',
          borderRadius: '0.125rem !important',
          border: '1px solid gray',
        },
        // ...
      })
    }),
    // ...
  ],
}
