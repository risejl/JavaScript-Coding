/**
 * @param {Function} fn
 * @param {any[]} args
 * @returns {Function}
 */

function partial(fn, ...args) {
  return function (...restArgs) {
    const copyArgs = args.map((arg) => {
      return arg === partial.placeholder 
        ? restArgs.shift()
        : arg
    });

    return fn.call(this, ...copyArgs, ...restArgs);
  }
}

partial.placeholder = Symbol();

// const func = (...args) => args
// const func123 = partial(func, 1,2,3)
// console.log(func123(4)) // => [1, 2, 3, 4]