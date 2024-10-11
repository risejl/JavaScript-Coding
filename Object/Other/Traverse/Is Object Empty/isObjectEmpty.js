/**
 * @param {Object | Array} obj
 * @return {boolean}
 */

function isObjectEmpty(obj) {
  for (const _ in obj) {
    return false;
  }

  return true;
}

// Usage example
const emptyObj = Object.create(null);
const emptyObjLiteral = {};
const nonEmptyObj = {
  name: "Jack"
};
console.log(isObjectEmpty(emptyObj)); // true
console.log(isObjectEmpty(emptyObjLiteral)); // true
console.log(isObjectEmpty(nonEmptyObj)); // false
