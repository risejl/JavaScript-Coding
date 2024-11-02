/**
 * @return {Array}
 */

function arrayOf(arr) {
  return [].slice.call(arguments);
}

// Usage example
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = arrayOf(array1, array2);
console.log(combinedArray); // => [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
