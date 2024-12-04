/**
 * @param {number} length
 * @return {string}
 */

// Time: O(n) | Space: O(1)
function generateRandomString(length) {
  const CHARS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i += 1) {
    const randIdx = Math.floor(Math.random() * CHARS.length);
    result += CHARS[randIdx];
  }

  return result;
}

// Example usage
console.log(generateRandomString(4)); // => a string with length of 4 characters
