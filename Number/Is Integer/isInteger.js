/**
 * @param {any} value
 * @return {boolean}
 */

// Time: O(1) | Space: O(1)
function isInteger(value) {
  return Number.isInteger(value);
}

// Usage example
console.log(isInteger(10)); // => true
console.log(isInteger(10.5)); // => false
