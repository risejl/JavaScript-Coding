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
  let k = 0;
  while (k < len) {
    if (k in O) {
      callbackFn.call(thisArg, O[k], k, O);
    }
    k++;
  }
};