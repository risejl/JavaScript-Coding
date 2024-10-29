/**
 * @param {number} count
 * @return {string}
 */

String.prototype.myRepeat = function (count) {
  if (count < 0) {
    throw new RangeError("count must be non-negative");
  }

  if (count === 0) {
    return "";
  }

  return Array.from({ length: Math.round(count) + 1 }).join(this);
};

// Usage example
console.log("abc".repeat(0)); // => ""
console.log("abc".repeat(1)); // => "abc"
console.log("abc".repeat(2)); // => "abcabc"
console.log("abc".repeat(-1)); // => RangeError
