/**
 * @param {any} arrayLike
 * @return {Array}
 */

// Time: O(1) | Space: O(1)
function arrayLikeToArray(arrayLike) {
  return Array.from(arrayLike);
}

// Usage example
const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
console.log(arrayLikeToArray(arrayLike)); // => ['a', 'b', 'c']
