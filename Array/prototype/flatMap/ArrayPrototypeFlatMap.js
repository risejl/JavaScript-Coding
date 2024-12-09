/**
 * @param {functioon} callbackFn
 * @param {object | undefined} thisArg
 * @return {array}
 */

// Time: O(1) | Space: O(1)
Array.prototype.myFlatMap = function (callbackFn, thisArg) {
  return this.reduce((result, element, index, array) => {
    const mappedValue = callbackFn.call(thisArg, element, index, array);
    return result.concat(mappedValue);
  }, []);
};

// Usage example
const arr1 = [1, 2, 1];
const result = arr1.myFlatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result); // => [1, 2, 2, 1];
