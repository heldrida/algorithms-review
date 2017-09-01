/**
 * BinarySearch is a `divide strategy` algorithm. Binary search divides the size
 * of the problem into halves until it finds a result.
 */
function binarySearch (min, max, randomNumber, nrRecursiveCalls = 1) {
  const guess = Math.ceil((min + max) / 2)
  if (randomNumber <= 0) {
    return `Not found after ${nrRecursiveCalls} calls!`
  } else if (guess === randomNumber) {
    return `Found after ${nrRecursiveCalls} calls!`
  } else {
    if (guess !== randomNumber) {
      if (randomNumber > guess) {
        min = guess + 1
      } else {
        max = guess - 1
      }
      nrRecursiveCalls += 1
      return binarySearch(min, max, randomNumber, nrRecursiveCalls)
    }
  }
}

module.exports = binarySearch
