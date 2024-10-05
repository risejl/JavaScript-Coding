/**
 * @param {*} value
 * @return Promise
 */
function promiseResolve(value) {
  if (value instanceof Promise) {
    return value;
  }

  if (typeof value.then === 'function') {
    return new Promise(value.then.bind(value));
  }

  return new Promise((resolve) => resolve(value));
}

/*
const resolvedThenable = promiseResolve({
  then(resolve, reject) {
    resolve(42);
  },
});
await resolvedThenable; // 42
*/