/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param { any } [thisArg]
 * @return {Array<T>}
 */

Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const newArray = [];

  for (let i = 0; i < len; i++) {
    const iValue = this[i];
    if (
      Object.hasOwn(this, i) &&
      callbackFn.call(thisArg, iValue, i, this)
    ) {
      newArray.push(iValue);
    }
  }

  return newArray;
};