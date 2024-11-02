/**
 * @param {Array} array
 * @return {Number}
 */

function mean(arr) {
  return arr.reduce((sum, number) => sum + number, 0) / arr.length;
}

// Usage example
console.log(mean([1, 2, 3])); // => 2
console.log(mean([1, 2, 3, 4, 5])); // => 3
