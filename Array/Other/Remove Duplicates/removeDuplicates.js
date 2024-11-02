/**
 * @param {*} arr
 */

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Usage example
const inputArray = [1, 2, 3, 2, 1, 4, 5, 6, 5, 4];
const outputArray = removeDuplicates(inputArray);

console.log(outputArray); // => [1, 2, 3, 4, 5, 6]
