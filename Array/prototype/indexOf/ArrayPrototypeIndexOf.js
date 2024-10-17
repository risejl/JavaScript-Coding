/**
 * @param {any} searchElement
 * @param {number} fromIndex 
 * @return {number}
 */

Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
  const len = this.length;

  if (fromIndex < 0) {
    fromIndex = Math.max(0, fromIndex + this.length);
  }

  for (let i = fromIndex; i < len; i += 1) {
    if (this[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

// Usage example
console.log([1, 2, 3, 4, 5].myIndexOf(3)); // => 2
console.log([1, 2, 3, 4, 5].myIndexOf(6)); // => -1
console.log([1, 2, 3, 4, 5].myIndexOf(1)); // => 0
console.log(['a', 'b', 'c'].myIndexOf('b')); // => 1
console.log([NaN].myIndexOf(NaN)); // => -1 (since NaN !== NaN)