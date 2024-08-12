/**
 * @param {string} str 
 * @return {number} 
 */

const longestLength = function (str) {
  return Math.max(
    ...str
      .split(' ')
      .map(x => x.length)
  );
}

// example
// console.log(longestLength('The longest word is fasdfafaf')); // 9