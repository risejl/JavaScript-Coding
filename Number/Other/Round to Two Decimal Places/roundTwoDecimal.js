/**
 * @param {any} value
 * @returns any
 */

// Time: O(1) | Space: O(1)
function fixedTwoDigits(value) {
  if (typeof value !== "number") {
    return value;
  }

  return Number(value.toFixed(3).slice(0, -1));
}

// Usage example
console.log(fixedTwoDigits(Math.random())); // => 0.xx
