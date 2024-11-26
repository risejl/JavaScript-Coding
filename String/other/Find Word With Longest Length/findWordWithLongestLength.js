/**
 * @param {string} str
 * @return {string[]}
 */

// Time: O(n) | Space: O(n)
function longestWord(str) {
  const strArr = str.split(" ");
  let maxLen = 0;
  let maxWord = "";

  for (const char of strArr) {
    if (char.length > maxLen) {
      max = char.length;
      maxWord = char;
    }
  }

  return maxWord;
}

// Usage example
console.log(longestWord("The longest word is thelongestword")); // => "thelongestword"
