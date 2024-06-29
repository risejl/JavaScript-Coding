/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */

Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const newArray = new Array(len);

  for (let i = 0; i < len; i++) {
    if (Object.hasOwn(this, i)) {
      newArray[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }

  return newArray;
};