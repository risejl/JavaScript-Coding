/**
 * @param {number} length
 * @return {string}
 */

function generateRandomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i += 1) {
    const randomIdx = Math.floor(Math.random() * chars.length);
    result += chars.charAt(randomIdx);
  }

  return result;
}

// Example usage
console.log(generateRandomString(4)); // => a string with length of 4 characters
