/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {boolean}
 */

Array.prototype.mySome = function (callbackFn, thisArg) {
  const len = this.length;
  let flag = false;

  for (let i = 0; i < len; i += 1) {
    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this)) {
      flag = true;
      break;
    }
  }

  return flag;
};

// Usage example
console.log([1, 2, 3].mySome((item) => item > 2)); // => true
console.log([1, 2, 3].mySome((item) => item < 0)); // => false
