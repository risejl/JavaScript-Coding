/**
 * @param {Array} array
 * @param {Function} predicate
 * @return {Array}
 */
function dropRightWhile(arr, predicate) {
  let index = arr.length - 1;

  while (index >= 0 && predicate(arr[index], index, arr)) {
    index -= 1;
  }

  return arr.slice(0, index + 1);
}

// Usage example
console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3)); // => [1, 2, 3]
console.log(dropRightWhile([1, 2, 3], (value) => value < 6)); // => []
console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 6)); // => [1, 2, 3, 4, 5]
