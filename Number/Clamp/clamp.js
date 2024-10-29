/**
 * @param {number} value
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */

function clamp(value, lower, upper) {
  return Math.min(upper, Math.max(lower, value));
}

// Usage example
console.log(clamp(12, 0, 1)); // => 1
console.log(clamp(12, 5, 13)); // => 12
console.log(clamp(12, 15, 100)); // => 15
