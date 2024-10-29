/**
 * @param {string} str
 * @return {number}
 */

function longestLength(str) {
  const strArr = str.split(" ");
  let length = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > length) {
      length = strArr[i].length;
    }
  }
  return length;
}

// Usage example
console.log(longestLength("The longest word is thelongestword")); // => 14
