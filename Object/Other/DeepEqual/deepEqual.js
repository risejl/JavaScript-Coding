/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */

function isEqual(a, b, visited = new Set()) {
  if (a === b) {
    return true;
  }

  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return false;
  }

  if (visited.has(a) || visited.has(b)) {
    return true;
  }

  visited.add(a);
  visited.add(b);

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const k in a) {
    if (a.hasOwnProperty(k)) {
      if (!isEqual(a[k], b[k], visited)) {
        return false;
      }
    }
  }
  
  return true
}


// example
/*
const a = {a: 'bfe'}
const b = {a: 'bfe'}
console.log(isEqual(a, b)); // true
console.log(a === b); // false
const c = [1, a, '4']
const d = [1, b, '4']
console.log(isEqual(c, d)); // true
console.log(c === d); // false
*/