/**
 * @param {number} n 
 * @return {string}
 */

String.prototype.myRepeat = function (n) {
  return (new Array(n + 1)).join(this);
}

// example
// console.log('hello world'.myRepeat(2)); // hello worldhello world