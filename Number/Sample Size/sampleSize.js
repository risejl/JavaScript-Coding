/**
 * @param {Array} arr - The array to sample from.
 * @param {number} size - The number of elements to sample.
 * @return {Array} - An array containing the sampled elements.
 */

function sampleSize(arr, size) {
  if (size > arr.length) {
    throw new Error("Size cannot be greater than the array length");
  }

  const shuffled = [...arr];

  for (let i = 0; i < shuffled.length; i += 1) {
    const randIdx = Math.floor(Math.random() * shuffled.length);
    [shuffled[i], shuffled[randIdx]] = [shuffled[randIdx], shuffled[i]];
  }

  return shuffled.slice(0, size);
}

// Example usage
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sampledElements = sampleSize(myArray, 3);
console.log(sampledElements); // => [2, 5, 7]
