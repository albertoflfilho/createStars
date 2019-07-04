/**
 * Write a function that takes an input between 0 and 5 inclusively and outputs an array of 5 elements that will be used for generating 5 stars in UI.
 *
 * Examples:
 *  createStars(3.5) // [100, 100, 100, 50, 0]
 *  createStars(1.6667) // [100, 66.67, 0, 0, 0]
 */

const createStars = (input) => {
  const result = []
  const firstDigit = parseInt(input.toString()[0])

  if (firstDigit <= 5) {
    Array.from(Array(firstDigit)).forEach(() => result.push(100))
    if ((input - firstDigit) * 100 != 0) {
      result.push((input - firstDigit) * 100)
    }
    const remainder = 5 - result.length
    if (remainder >= 1) {
      Array.from(Array(remainder)).forEach(() => result.push(0))
    }
  } else {
    result.push('input > 5')
  }

  console.log('outputs: ', result)
}

createStars(3.5)
createStars(1.6667)
