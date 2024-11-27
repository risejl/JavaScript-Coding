/**
 * @return {Array<number>}
 */

// Time: O(n) | Space: (n)
Array.prototype.mySquare = function () {
  const len = this.length;
  const newArray = Array.from({ length: len });

  for (let i = 0; i < len; i += 1) {
    newArray[i] = this[i] * this[i];
  }

  return newArray;
};

// Usage example
console.log([1, 2, 3].mySquare()); // => [1, 4, 9];
console.log([].mySquare()); // => [];
