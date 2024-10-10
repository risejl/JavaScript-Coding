/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

function timeLimit(fn, limit) {
  return async function (...args) {
    return new Promise(async (resolve, reject) => {
      const timerId = setTimeout(() => {
        reject('Time limit exceeded');
      }, limit);

      try {
        const value = await fn(...args);
        resolve(value);
      } catch (err) {
        reject(err);
      } finally {
        clearTimeout(timerId);
      }
    });
  }
}

// Usage example
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 1000);
limited(1500).catch(console.log); // => "Time Limit Exceeded" at t=1000ms
