/**
 * @param {functioon} callbackFn
 * @param {object | undefined} thisArg
 * @return {array}
 */

Array.prototype.myFlatMap = function (callbackFn, thisArg) {
  return this.reduce((acc, element, index, array) => {
    const mappedValue = callbackFn.call(thisArg, element, index, array);
    return acc.concat(mappedValue);
  }, []);
};

// Usage example
const arr1 = [1, 2, 1];
const result = arr1.myFlatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result); // => [1, 2, 2, 1];
