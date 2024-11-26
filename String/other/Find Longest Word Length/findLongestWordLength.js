/**
 * @param {string} str
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function longestLength(str) {
  const strArr = str.split(" ");
  let maxLen = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > maxLen) {
      maxLen = strArr[i].length;
    }
  }
  return maxLen;
}

// Usage example
console.log(longestLength("The longest word is thelongestword")); // => 14
