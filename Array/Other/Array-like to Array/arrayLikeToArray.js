/**
 * @param {any} arrayLike
 * @return {Array}
 */

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
