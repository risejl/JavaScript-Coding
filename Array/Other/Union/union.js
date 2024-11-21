/**
 * @param {Array} array
 * @param {Array} values
 * @return {Array}
 */

function union(arr, values) {
  return Array.from(
    new Set(arr.filter(Boolean)).union(new Set(values.filter(Boolean)))
  );
}

// Usage example
console.log(union([1, 2, 3], [2, 3])); // => [1, 2, 3]
console.log(union([1, 2, 3, 4], [2, 3, 1])); // => [1, 2, 3, 4]
console.log(union([1, 2, 3], [2, 3, 1, 4])); // => [1, 2, 3, 4]
console.log(union([1, , 3], [1])); // => [1, 3]
