/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

function timeLimit (fn, t) {
  return function(...args) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
    });

    const fnPromise = fn(...args);

    return Promise.race([timeoutPromise, fnPromise]);
  }
};

// Usage example
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 1000);
limited(1500).catch(console.log); // => "Time Limit Exceeded" at t=1000ms
