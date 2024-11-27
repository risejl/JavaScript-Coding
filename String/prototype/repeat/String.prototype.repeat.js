/**
 * @param {number} count
 * @return {string}
 */

// Time: O(1) | Space: O(1)
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
console.log("abc".myRepeat(0)); // => ""
console.log("abc".myRepeat(1)); // => "abc"
console.log("abc".myRepeat(2)); // => "abcabc"
console.log("abc".myRepeat(-1)); // => RangeError
