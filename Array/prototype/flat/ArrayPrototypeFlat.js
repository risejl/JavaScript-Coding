/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

// Time: O(n) | Space: O(n)
function flatten(arr, depth = 1) {
  const newArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i]) && depth !== 0) {
      newArray.push(...flatten(arr[i], depth - 1));
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

const array = [[1, 2], [1], 1, [[[1]]]];
console.log(flatten(array)); // => [ 1, 2, 1, 1, [ [ 1 ] ] ]
console.log(flatten(array, 2)); // => [ 1, 2, 1, 1, [ 1 ] ]
console.log(flatten(array, 3)); // => [ 1, 2, 1, 1, 1 ]
