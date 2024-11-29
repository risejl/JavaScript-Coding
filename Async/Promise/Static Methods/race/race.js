/**
 * @param {Array} iterable
 * @return {Promise}
 */

function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach(async (item) => {
      try {
        const result = await item;
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  });
}

// Usage example
const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
});
const p1 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Err!");
  }, 400);
});

promiseRace([p0, p1]).then((data) => {
  console.log(data); // => 42
});
