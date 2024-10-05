/**
 * @param {number} index
 * @return {any | undefiend}
 */

Array.prototype.myAt = function (index) {
  const len = this.length;

  if (index < -len || index >= len) {
    return;
  }

  return this[(index + len) % len];
};

// console.log([1, 2, 3, 4].myAt(2)); // 3
// console.log([1, 2, 3, 4].myAt(-1)); // 4
// console.log([1, 2, 3, 4].myAt(5)); // undefined