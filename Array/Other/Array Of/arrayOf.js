/**
 * @return {Array}
 */

// Solution 1
// Time: O(1) | Space: O(1)
function arrayOf(arr) {
  return [].slice.call(arguments);
}

// Solution 2
// Time: O(1) | Space: O(1)
function arrayOf(arr) {
  return [...arguments];
}

// Solution 3
// Time: O(1) | Space: O(1)
function arrayOf(arr) {
  return Array.from(arguments);
}

// Usage example
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = arrayOf(array1, array2);
console.log(combinedArray); // => [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
