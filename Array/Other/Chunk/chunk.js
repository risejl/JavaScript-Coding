/**
 * @template T
 * @param {Array<T>} arr The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */

function chunk(arr, size = 1) {
  if (!Array.isArray(arr) || size < 1) {
    return [];
  }

  const newArray = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    newArray.push(chunk);
  }

  return newArray;
}

// Usage example
console.log(chunk(["a", "b", "c", "d"])); // => [['a'], ['b'], ['c'], ['d']]
console.log(chunk([1, 2, 3, 4], 2)); // => [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4], 3)); // => [[1, 2, 3], [4]]
