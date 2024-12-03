/**
 * @param {Array} arr
 * @param {Function} callbackFn
 * @return {Array}
 */

function maxBy(arr, callbackFn) {
  if (arr.length === 0) {
    return [];
  }

  const values = arr.map(callbackFn);
  const maxValue = Math.max(...values);
  return arr.filter((_, index) => values[index] === maxValue);
}

// Example usage:
const data = [{ a: 3 }, { a: 4 }, { a: 5 }, { a: 5 }];

const result = maxBy(data, (item) => item.a);
console.log(result); // Output: [{ a: 5 }, { a: 5 }]
