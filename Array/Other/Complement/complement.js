/**
 * @param {Array} array
 * @param {Array} values
 * @return {Array}
 */

// Solution 1: set.difference()
// Time: O(1) | Space: O(n)
function difference(arr, values) {
  return Array.from(
    new Set(arr.filter(Boolean)).difference(new Set(values.filter(Boolean)))
  );
}

// Solution 2: Set + loop
// Time: O(n) | Space: O(n)
function difference(arr, values) {
  const newArray = [];
  const valueSet = new Set(values);

  for (let i = 0; i < arr.length; i += 1) {
    const value = arr[i];

    if (
      !valueSet.has(value) &&
      !(value === undefined && !Object.hasOwn(arr, i))
    ) {
      newArray.push(value);
    }
  }

  return newArray;
}

// Usage example
console.log(difference([1, 2, 3], [2, 3])); // => [1]
console.log(difference([1, 2, 3, 4], [2, 3, 1])); // => [4]
console.log(difference([1, 2, 3], [2, 3, 1, 4])); // => []
console.log(difference([1, , 3], [1])); // => [3]
