/**
* @param {Array} arr
* @param {Function} fn
* @return {Array}
*/

function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

// console.log(sortBy([5, 4, 1, 2, 3], (x) => x));