/**
 * @return {any}
 */

// Time: O(1) | Space: O(1)
Array.prototype.mySample = function () {
  const randIdx = Math.floor(Math.random() * this.length);

  return this[randIdx];
};

// Usage example
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.mySample()); // => *
