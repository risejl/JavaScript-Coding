/**
 * @param {Array} array
 * @param {Function} predicate
 * @return {Array}
 */

function dropWhile(arr, predicate) {
  let index = 0;

  while (index < arr.length && predicate(arr[index], index, arr)) {
    index += 1;
  }

  return arr.slice(index);
}

// dropWhile([1, 2, 3, 4, 5], (value) => value < 3); // => [3, 4, 5]
// dropWhile([1, 2, 3], (value) => value < 6); // => []