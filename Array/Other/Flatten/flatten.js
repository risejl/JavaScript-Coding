/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */

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

/*
// Single-level arrays are unaffected.
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level.
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively.
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
*/
