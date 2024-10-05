/**
* @param {string} str
* @return {string}
*/

function compressString(str) {
  let compressed = '';
  let count = 1;
  
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  
  return compressed.length < str.length
  	? compressed
  	: str;
}

// console.log(compressString('aabcccccaaa')); // => "a2b1c5a3"
// console.log(compressString('abcdefg')); // => "abcdefg"