/**
 * @param {object} obj
 * @param {string | string[]} path
 * @param {any} value
 */

function set(obj, path, value) {
  if (!Array.isArray(path)) {
    path = path.replaceAll('[', '.').replaceAll(']', '').split('.');
  }

  for (let i = 0; i < path.length - 1; i += 1) {
    let nextPath = path[i + 1];
    const newObj = '' + (+nextPath) === nextPath
      ? []
      : {};

    if (!obj[path[i]]) {
      obj[path[i]] = newObj;
    }
    obj = obj[path[i]];
  }

  obj[path.at(-1)] = value;
}

/*
const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
}
set(obj, 'a.b.c', 'BFE')
console.log(obj.a.b.c) // "BFE"
set(obj, 'a.b.c.0', 'BFE')
console.log(obj.a.b.c[0]) // "BFE"
*/