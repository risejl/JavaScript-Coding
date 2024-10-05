/**
 * @return {Array<number>}
 */

Array.prototype.mySquare = function () {
  const len = this.length;
  const newArray = Array.from({ length: len });

  for (let i = 0; i < len; i += 1) {
    newArray[i] = this[i] * this[i];
  }

  return newArray;
}

// console.log([1, 2, 3].mySquare()); // [1, 4, 9];
// console.log([].mySquare()); // [];