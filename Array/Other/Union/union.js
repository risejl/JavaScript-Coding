/**
 * @param {Array} array
 * @param {Array} values
 * @return {Array}
 */

// Solution 1
// Time: O(1) | Space: O(1)
function union(arr, values) {
  return Array.from(
    new Set(arr.filter(Boolean)).union(new Set(values.filter(Boolean)))
  );
}

// Solution 2
// Time: O(n) | Space: O(n)
function union(arr, values) {
  const newArray = [];
  const valueSet = new Set(values);

  valueSet.forEach((item) => {
    newArray.push(item);
  });

  for (let i = 0; i < arr.length; i += 1) {
    if (!valueSet.has(arr[i]) && arr[i] !== undefined) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

// Usage example
console.log(union([1, 2, 3], [2, 3])); // => [1, 2, 3]
console.log(union([1, 2, 3, 4], [2, 3, 1])); // => [1, 2, 3, 4]
console.log(union([1, 2, 3], [2, 3, 1, 4])); // => [1, 2, 3, 4]
console.log(union([1, , 3], [1])); // => [1, 3]
