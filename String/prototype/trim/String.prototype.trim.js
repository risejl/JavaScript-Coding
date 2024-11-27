/**
 * @param {strint} str
 * @return {string}
 */

// Time: O(1) | Space: O(1)
String.prototype.myTrim = function () {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  // or
  // return this.replace(/^[\s]+|[\s]+$/g, "");
};

// Usage example
const str = "  Hello, World!  ";
console.log(str.myTrim()); // => "Hello, World!"
