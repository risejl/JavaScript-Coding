/**
 * @param {Function} callbackFn
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
function setCancellableTimeout(callbackFn, delay, ...args) {
  const timerId = setTimeout(callbackFn, delay, ...args);

  return () => {
    clearTimeout(timerId);
  };
}

// Usage example
let i = 0;
// t = 0:
const cancel = setCancellableTimeout(() => {
  i++;
}, 100);
// t = 50:
cancel();
// t = 100: i is still 0 because cancel() was called.
