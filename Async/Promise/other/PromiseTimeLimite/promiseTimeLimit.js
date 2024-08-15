/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise(async (resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
      try {
        const value = await fn(...args);
        clearTimeout(timeoutId);
        resolve(value);
      } catch (err) {
        clearTimeout(timeoutId);
        reject(err);
      }
    });
  }
}

// example
/*
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
*/