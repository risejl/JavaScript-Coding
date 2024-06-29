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
