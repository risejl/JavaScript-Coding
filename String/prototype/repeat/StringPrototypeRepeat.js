/**
 * @param {number} num 
 * @return {string}
 */

// s1
String.prototype.myRepeat = function (num) {
  return (new Array(num + 1)).join(this);
}