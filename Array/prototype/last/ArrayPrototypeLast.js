/**
 * @return {any | number}
 */

Array.prototype.myLast = function() {
  return this.length ? this[this.length - 1] : -1;
};