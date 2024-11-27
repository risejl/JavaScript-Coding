/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param { any } [thisArg]
 * @return {Array<T>}
 */

// Time: O(n) | Space: O(n)
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const newArray = [];

  for (let i = 0; i < this.length; i += 1) {
    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

// Usage example
console.log([1, 2, 3, 4].myFilter((value) => value % 2 == 0)); // => [2, 4]
console.log([1, 2, 3, 4].myFilter((value) => value < 3)); // => [1, 2]
