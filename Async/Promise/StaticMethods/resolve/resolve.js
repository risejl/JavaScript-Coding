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

// example
/*
const p = promiseResolve(42);
await p; // 42

const original = new Promise((resolve) => resolve(42));
const cast = promiseResolve(original);
await cast; // 42

const resolvedThenable = promiseResolve({
  then(resolve, reject) {
    resolve(42);
  },
});
await resolvedThenable; // 42
*/