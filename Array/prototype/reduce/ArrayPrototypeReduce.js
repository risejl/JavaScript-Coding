/**
 * @template T, U
 * @param { (previousValue: U, currentValue: T, currentIndex: number, array: Array<T>) => U } callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */

// Time: O(n) | Space: O(1)
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const hasInitialValue = initialValue !== undefined;
  const len = this.length;

  if (!hasInitialValue && !len) {
    throw new Error("Reduce of empty array with no initial value");
  }

  let accumulator = hasInitialValue ? initialValue : this[0];
  let startingIndex = hasInitialValue ? 0 : 1;

  for (let i = startingIndex; i < len; i += 1) {
    if (Object.hasOwn(this, i)) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

// Usage example
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((acc, num) => acc + num, 0);
console.log(sum); // => 15
const products = numbers.myReduce((acc, num) => acc * num, 1);
