/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */

// Time: O(n) | Space: O(n)
function flatten(arr) {
  const newArray = [];
  const copy = [...arr];

  while (copy.length) {
    const item = copy.shift();

    if (Array.isArray(item)) {
      copy.unshift(...item);
    } else {
      newArray.push(item);
    }
  }

  return newArray;
}

// Usage example
console.log(flatten([1, 2, 3])); // [1, 2, 3]

// Inner arrays are flattened into a single level.
console.log(flatten([1, [2, 3]])); // [1, 2, 3]
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
); // [1, 2, 3, 4]

// Flattens recursively.
console.log(flatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
