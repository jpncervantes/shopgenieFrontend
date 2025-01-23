export function addFontFamilyUtilities({ addUtilities }) {
  const fontFamilies = {
    '.font-geist-sans': {
      fontFamily: 'var(--font-geist-sans)'
    },
    '.font-geist-mono': {
      fontFamily: 'var(--font-geist-mono)'
    },
    '.font-archivo': {
      fontFamily: 'var(--font-archivo)'
    },
    '.font-bricolage': {
      fontFamily: 'var(--font-bricolage_grotesque)'
    }
  }

  addUtilities(fontFamilies)
}

export function addFontSizeUtilities({ addUtilities }) {
  const fontSizes = {
    '.brand': { fontSize: '16px', fontWeight: '800' },
    '.body-14': { fontSize: '14px', fontWeight: 'normal' },
    '.body-16': { fontSize: '16px', fontWeight: 'normal' },
    '.body-18': { fontSize: '18px', fontWeight: 'normal' },
    '.body-20': { fontSize: '20px', fontWeight: 'normal' },
    '.title-48': { fontSize: '48px', fontWeight: '800' }
  }

  addUtilities(fontSizes)
}

export function addFontColorUtilities({ addUtilities }) {
  const fontColors = {
    '.gray': { color: '#535353' },
    '.black': { color: '#000000' },
    '.pink': { color: '#FB68BF' },
    '.teal': { color: '#05B9BD' },
    '.yellow': { color: '#FEEB0F' },
    '.orange': { color: '#FF6A34' }
  }

  addUtilities(fontColors)
}

export function addComponentStylingUtilities({ addUtilities }) {
  const cardStyle = {
    '.card-border': {
      background: 'white',
      border: '1px solid var(--foreground)',
      borderRadius: '10px',
      boxShadow: '4px 6px 0px 0px #000000;'
    },
    '.basic-button': {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid var(--foreground)',
      padding: '8px',
      borderRadius: '4px'
    },
    '.list-card': {
      border: '1px solid var(--foreground)',
      borderRadius: '11px',
      boxShadow: '4px 6px 0px 0px #000000'
    }
  }

  addUtilities(cardStyle)
}

export function fontStylingUtilities({ addUtilities, theme }) {
  const fontFamilies = theme('fontFamily')
  const fontSizes = theme('fontSize')
  const fontWeights = theme('fontWeight')

  const newUtilities = {}

  Object.keys(fontFamilies).forEach((font) => {
    Object.keys(fontSizes).forEach((size) => {
      Object.keys(fontWeights).forEach((weight) => {
        const className = `font-${font}-${size}-${weight}`
        newUtilities[`.${className}`] = {
          fontFamily: `var(${fontFamilies[font].join(', ')})`,
          fontSize: fontSizes[size][0],
          fontWeight: fontWeights[weight]
        }
      })
    })
  })

  addUtilities(newUtilities, ['responsive', 'hover'])
}

export const tailwindColors = {
  background: 'var(--background)',
  foreground: 'var(--foreground)'
}

export const tailwindFontFamily = {
  geistSans: ['--font-geist-sans'],
  geistMono: ['--font-geist-mono'],
  archivo: ['--font-archivo'],
  bricolage: ['--font-bricolage_grotesque']
}
