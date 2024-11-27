/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

// Time: O(1) | Space: O(1)
function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}

// Usage example
console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); // => [1, 2, 3, 4, 5]
