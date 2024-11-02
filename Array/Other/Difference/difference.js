/**
 * @param {Array} array
 * @param {Array} values
 * @return {Array}
 */

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
