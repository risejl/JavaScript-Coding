// Time: O(1) | Space: O(1)

function isBoolean(value) {
  return typeof value === "boolean";
}

function isString(value) {
  return typeof value === "string";
}

function isNumber(value) {
  return typeof value === "number";
}

function isSymbol(value) {
  return typeof value === "symbol";
}

function isBigInt(value) {
  return typeof value === "bigint";
}

function isUndefined(value) {
  return typeof value === "undefined";
}

function isNull(value) {
  return value === null;
}

// Usage example
console.log(isSymbol(Symbol("test"))); // => true
console.log(isNull(null)); // => true
console.log(isUndefined(undefined)); // => true
console.log(isNumber(1)); // => true
console.log(isString("")); // => true
console.log(isBoolean(true)); // => true
console.log(isBigInt(9007199254740991n)); // => true
