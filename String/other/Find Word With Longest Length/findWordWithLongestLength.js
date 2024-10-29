/**
 * @param {string} str
 * @return {string[]}
 */

function longestWord(str) {
  const strArr = str.split(" ");
  const result = [];
  let max = 0;

  for (const char of strArr) {
    if (char.length > max) {
      max = char.length;
    }
  }

  for (const char of strArr) {
    if (char.length === max) {
      result.push(char);
    }
  }

  return result.join("");
}

// Usage example
console.log(longestWord("The longest word is thelongestword")); // => "thelongestword"
