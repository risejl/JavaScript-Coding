/**
 * @return {null|boolean|number|string|Array|Object}
 */

// Time: O(n) | Space: O(1)
Array.prototype.myLast = function () {
  return this.length ? this.at(-1) : -1;
  // or
  // return this.length ? this[this.length - 1] : -1;
};

// Usage example
console.log([].myLast()); // => -1;
console.log([1].myLast()); // => 1
console.log([1, 2].myLast()); // => 2
