/**
 * @param {any} arg
 * @returns {any}
 */

function undefinedToNull(arg) {
  const copyArg = arg;

  for (const key in copyArg) {
    const item = copyArg[key];
    if (typeof item !== "object" && item === undefined) {
      copyArg[key] = null;
    } else if (typeof item === "object") {
      undefinedToNull(item);
    } else {
      copyArg[key] = item;
    }
  }

  return copyArg;
}

// Usage example
console.log(undefinedToNull({a: undefined, b: 'BFE.dev'}));
// => // {a: null, b: 'BFE.dev'}
console.log(undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']}));
// => // {a: ['BFE.dev', null, 'bigfrontend.dev']}