/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function timeLimit(fn, limit) {
  return async function (...args) {
    return new Promise(async (resolve, reject) => {
      const timerId = setTimeout(() => {
        reject('Time Limit Exceeded');
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

/*
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
console.log(limited(150).catch(console.log)); // "Time Limit Exceeded" at t=100ms
*/