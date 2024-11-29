/**
 * @param {Array} iterable
 * @return {Promise<Array<{status: 'fulfilled', value: *} | {status: 'rejected', reason: *}>>}
 */

function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    const len = iterable.length;
    const results = Array.from({ length: len });
    let pending = len;

    if (pending === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = {
          status: "fulfilled",
          value,
        };
      } catch (err) {
        results[index] = {
          status: "rejected",
          reason: err,
        };
      }

      pending -= 1;

      if (pending === 0) {
        resolve(results);
      }
    });
  });
}

// Usage example
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("foo");
  }, 100);
});

promiseAllSettled([p0, p1, p2]).then((data) => {
  console.log(data);
});
// [
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 42 },
//   { status: 'rejected', reason: 'foo' },
// ];
