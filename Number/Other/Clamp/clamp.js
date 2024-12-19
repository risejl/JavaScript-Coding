/**
 * @param {number} value
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */

// Time: O(1) | Space: O(1)
function clamp(value, lower, upper) {
  return Math.max(lower, Math.min(upper, value));
  // or
  // return Math.min(upper, Math.max(lower, value));
}

// Usage example
console.log(clamp(12, 0, 1)); // => 1
console.log(clamp(12, 5, 13)); // => 12
console.log(clamp(12, 15, 100)); // => 15
