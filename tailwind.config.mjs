import {
  addComponentStylingUtilities,
  addFontColorUtilities,
  addFontFamilyUtilities,
  addFontSizeUtilities,
  fontStylingUtilities
} from './utils/tailwindUtils'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        pink: '#F969C4',
        teal: '#03BBB8',
        yellow: '#FEEB0F',
        orange: '#FF6A34'
      },
      fontFamily: {
        geistSans: ['--font-geist-sans'],
        geistMono: ['--font-geist-mono'],
        archivo: ['--font-archivo'],
        bricolage: ['--font-bricolage_grotesque']
      },
      spacing: {
        8: '8px',
        10: '10px',
        12: '12px',
        18: '18px',
        20: '20px',
        24: '24px',
        32: '32px',
        36: '36px',
        48: '48px'
      },
      borderColor: {
        black: '#000'
      },
      fontSize: {
        12: ['12px', { lineHeight: '1.5' }],
        14: ['14px', { lineHeight: '1.5' }],
        16: ['16px', { lineHeight: '1.5' }],
        20: ['20px', { lineHeight: '1.5' }],
        32: ['32px', { lineHeight: '0.5px' }]
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700
      }
    }
  },
  plugins: [
    addFontFamilyUtilities,
    addFontSizeUtilities,
    addFontColorUtilities,
    addComponentStylingUtilities,
    fontStylingUtilities,
    require('flowbite/plugin')
  ]
}
