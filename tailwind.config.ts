import typography from '@tailwindcss/typography'
// @ts-expect-error this module does not come with types, but don't worry.
import maskImage from 'tailwind-gradient-mask-image'

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['"Tilt Warp"', 'cursive'],
        body: ['"Atkinson Hyperlegible"', 'sans-serif']
      },
      backgroundImage: {
        'rainbow-linear-gradient-r': 'linear-gradient(to right, rgb(255, 64, 64), rgb(244, 114, 24), rgb(213, 167, 2), rgb(167, 213, 2), rgb(114, 244, 24), rgb(64, 255, 63), rgb(24, 244, 114), rgb(2, 213, 167), rgb(2, 167, 213), rgb(24, 114, 244), rgb(63, 64, 255), rgb(114, 24, 244), rgb(167, 2, 213), rgb(213, 2, 167), rgb(244, 24, 114))',
        'rainbow-conic-gradient': 'conic-gradient(rgb(255, 64, 64), rgb(244, 114, 24), rgb(213, 167, 2), rgb(167, 213, 2), rgb(114, 244, 24), rgb(64, 255, 63), rgb(24, 244, 114), rgb(2, 213, 167), rgb(2, 167, 213), rgb(24, 114, 244), rgb(63, 64, 255), rgb(114, 24, 244), rgb(167, 2, 213), rgb(213, 2, 167), rgb(244, 24, 114))'
      }
    }
  },
  plugins: [
    typography,
    maskImage
  ]
}
