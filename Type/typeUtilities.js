function isBoolean(value) {
  return typeof value === 'boolean';
}

function isString(value) {
  return typeof value === 'string';
}

function isNumber(value) {
  return typeof value === 'number';
}

function isSymbol(value) {
  return typeof value === 'symbol';
}

function isBigInt(value) {
  return typeof value === 'bigint';
}

function isUndefined(value) {
  return typeof value === 'undefined';
}

function isNull(value) {
  return value === null;
}