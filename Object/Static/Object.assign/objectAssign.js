/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function myObjectAssign(target, ...sources) {
  if (target == null) {
    throw Error();
  }
  
  target = Object(target);

  function merge(keys = [], currSource) {
    for (const key of keys) {
      target[key] = currSource[key];

      if (target[key] !== currSource[key]) {
        throw Error();
      }
    }
  }

  for (const source of sources) {
    if (source == null) {
      continue;
    }

    merge(Object.keys(source), source);
    merge(Object.getOwnPropertySymbols(source), source);
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