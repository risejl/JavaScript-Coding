/**
 * @param {any} value
 * @return {boolean}
 */

function isInteger(value) {
  return Number.isInteger(value);
}

// Usage example
console.log(isInteger(10)); // => true
console.log(isInteger(10.5)); // => false
