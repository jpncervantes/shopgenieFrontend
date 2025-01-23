let lastColorIndex = -1 // Track the index of the last color used

const colors = ['teal', 'pink', 'yellow', 'orange']

export function getRandomColor() {
  // Generate a random index that is different from the last used color
  let randomIndex
  do {
    randomIndex = Math.floor(Math.random() * colors.length)
  } while (randomIndex === lastColorIndex)

  // Update the last used color index
  lastColorIndex = randomIndex

  // Return the color
  return colors[randomIndex]
}
