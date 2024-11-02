/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {boolean}
 */

Array.prototype.myEvery = function (callbackFn, thisArg) {
  const len = this.length;
  let flag = true;

  for (let i = 0; i < len; i += 1) {
    if (Object.hasOwn(this, i) && !callbackFn.call(thisArg, this[i], i, this)) {
      flag = false;
      break;
    }
  }

  return flag;
};

// Usage example
console.log([1, 2, 3].myEvery((item) => item > 2)); // => false
console.log([1, 2, 3].myEvery((item) => item > 0)); // => true
