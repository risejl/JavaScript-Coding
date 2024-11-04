/**
 * @param {function} callbackFn
 * @param {delay} number
 * @return {object}
 */

function invokeLater(callbackFn, delay) {
  const timerId = setTimeout(() => {
    callbackFn(null, 'run');
  }, delay);

  return {
    clear: () => clearTimeout(timerId),
  }
}

// Usage example
const cancel = invokeLater((err, data) => {
  console.log(data);
  cancel.clear();
}, 2000);