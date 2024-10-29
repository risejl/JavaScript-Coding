/**
 * @param {Array} Array
 * @return {arr}
 */

function mergeContinousNumbers(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }

  const merged = [];
  let start = arr[0];
  let end = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] === end + 1) {
      end = arr[i];
    } else {
      if (start === end) {
        merged.push(String(start));
      } else {
        merged.push(`${start}->${end}`);
      }

      start = end = arr[i];
    }
  }

  if (start === end) {
    merged.push(String(start));
  } else {
    merged.push(`${start}->${end}`);
  }

  return merged;
}

// Usage example
console.log(mergeContinousNumbers([1, 2, 3, 4, 6, 7, 9, 13, 15])); // => ['1->4', '6->7', '9', '13', '15']
