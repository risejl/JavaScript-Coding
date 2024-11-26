/**
 * @param {String} str
 * @return {Number}
 */

// Time: O(1) | Space: O(1)
function getStringLength(str) {
  return Array.from(new Intl.Segmenter().segment(str)).length;
}

// Usage example
console.log(getStringLength("test😁")); // => 5
console.log("test😁".length); // => 6
