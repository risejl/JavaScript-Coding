/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */

Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const newArray = Array.from({ length: len });

  for (let i = 0; i < len; i += 1) {
    if (Object.hasOwn(this, i)) {
      newArray[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }

  return newArray;
};

// console.log([1, 2, 3, 4].myMap((i) => i)); // [1, 2, 3, 4]
// console.log([1, 2, 3, 4].myMap((i) => i * i)); // [1, 4, 9, 16])