/**
 * @template T, U
 * @param { (previousValue: U, currentValue: T, currentIndex: number, array: Array<T>) => U } callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */

Array.prototype.myReduce = function (callbackFn, initialValue) {
  const hasInitialValue = initialValue !== undefined;
  const len = this.length;

  if (!hasInitialValue && len === 0) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let accumulator = hasInitialValue ? initialValue : this[0];
  let startingIndex = hasInitialValue ? 0 : 1;

  for (let i = startingIndex; i < len; i++) {
    if (Object.hasOwn(this, i)) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
  }

  return accumulator;
}