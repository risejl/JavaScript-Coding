/**
 * @param {Array} array
 * @param {Function} predicate
 * @return {Array}
 */

// Time: O(n) | Space: O(1)
function dropWhile(arr, predicate) {
  let index = 0;

  while (index < arr.length && predicate(arr[index], index, arr)) {
    index += 1;
  }

  return arr.slice(index);
}

// Usage example
dropWhile([1, 2, 3, 4, 5], (value) => value < 3); // => [3, 4, 5]
dropWhile([1, 2, 3], (value) => value < 6); // => []
