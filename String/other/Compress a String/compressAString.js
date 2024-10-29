/**
 * @param {string} str
 * @return {string}
 */

function compress(str) {
  if (!str) {
    return "";
  }

  let compressed = "";
  let count = 1;

  for (let i = 1; i <= str.length; i += 1) {
    if (i < str.length && str[i] === str[i - 1]) {
      count += 1;
    } else {
      compressed += str[i - 1];
      if (count > 1) {
        compressed += count;
      }
      count = 1;
    }
  }

  return compressed;
}

// Usage example
console.log(compress("a")); // 'a'
console.log(compress("aa")); // 'a2'
console.log(compress("aaa")); // 'a3'
console.log(compress("aaab")); // 'a3b'
console.log(compress("aaabb")); // 'a3b2'
console.log(compress("aaabba")); // 'a3b2a'
