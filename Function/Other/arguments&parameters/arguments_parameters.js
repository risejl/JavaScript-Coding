/**
* @param {Function} fn
* @return {number}
*/

export default function FunctionLength(fn) {
  return fn.length;
}

/**
* @param {...any} args
* @return {number}
*/

export default function numOfArguments(...args) {
  // return args.length;
  return arguments.length;
}