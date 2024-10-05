/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.myLast = function () {
  return this.length ? this.at(-1) : -1;
};

// console.log([].myLast()); // -1;
// console.log([1].myLast()); // 1
// console.log([1, 2].myLast()); // 2