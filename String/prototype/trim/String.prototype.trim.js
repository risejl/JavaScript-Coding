/**
 * @param {strint} str
 * @return {string}
 */

String.prototype.myTrim = function () {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};

// Usage example
const str = "  Hello, World!  ";
console.log(str.trim()); // => "Hello, World!"
