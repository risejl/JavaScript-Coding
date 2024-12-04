/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */

// Time: O(n) | Space: O(n^2)
Array.prototype.snail = function (rowsCount, colsCount) {
  if (this.length === 0 || rowsCount * colsCount !== this.length) {
    return [];
  }

  const result = Array.from({ length: rowsCount }, () => {
    return Array.from({ length: colsCount }, () => 0);
  });
  let isReversed = false;

  for (let i = 0; i < this.length; i += 1) {
    const row = !isReversed ? i % rowsCount : rowsCount - 1 - (i % rowsCount);
    const col = Math.floor(i / rowsCount);

    result[row][col] = this[i];

    if (i % rowsCount === rowsCount - 1) {
      isReversed = !isReversed;
    }
  }

  return result;
};

// Usage example
const arr = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];
console.log(arr.snail(5, 4));
/*
[
  [19,17,16,15],
  [10,1,14,4],
  [3,2,12,20],
  [7,5,18,11],
  [9,8,6,13]
]
*/
