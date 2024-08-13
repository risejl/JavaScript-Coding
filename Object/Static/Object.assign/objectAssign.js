/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */

function myObjectAssign(target, ...sources) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  target = Object(target);

  for (const source of sources) {
    if (source == null) {
      for (const key of [...Object.keys(source), ...Object.getOwnPropertySymbols(source)]) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

// example
/*
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

console.log(target); // Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target); // true
*/