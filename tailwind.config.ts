import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      display: ['"Tilt Warp"', 'cursive'],
      body: ['"Atkinson Hyperlegible"', 'sans-serif']
    },
    backgroundImage: {
      'rainbow-linear-gradient-r': 'linear-gradient(in hsl longer hue to right, red 0 0)',
      'rainbow-conic-gradient': 'conic-gradient(in hsl longer hue, red 0 0)'
    }
  },
  plugins: [
    typography
  ]
}
