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




/*
** support depth param
*/

/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

function flatten(arr, depth = 1) {
  const newArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i]) && depth !== 0) {
      newArray.push(...flatten(arr[i], depth - 1));
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}