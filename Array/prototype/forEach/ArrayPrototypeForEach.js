/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */

Array.prototype.myForEach = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }

  if (typeof callbackFn !== 'function') {
    throw new TypeError(callbackFn + ' is not a function');
  }

  const O = Object(this);
  // Zero-fill Right Shift to ensure that the result if always non-negative.
  const len = O.length >>> 0;

  for (let i = 0; i < len; i += 1) {
    if (Object.hasOwn(O, i)) {
      callbackFn.call(thisArg, O[i], i, O);
    }
  }
};

// console.log([1, 2, 3].myForEach((el) => el * el), null) // [1, 4, 9];