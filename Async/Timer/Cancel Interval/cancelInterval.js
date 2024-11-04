/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
function setCancellableInterval(callbackFn, delay, ...args) {
  const timerId = setInterval(callbackFn, delay, ...args);

  return () => {
    clearInterval(timerId);
  };
}

// Usage example
let i = 0;
// t = 0:
const cancel = setCancellableInterval(() => {
  i++;
}, 100);
// t = 50:
cancel();
// t = 100: i is still 0 because cancel() was called.
