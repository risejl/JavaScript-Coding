/**
 * @param {Promise} promise1 
 * @param {Promise} promise2 
 * @return {Promise}
 */

async function addTwoPromises(promise1, promise2) {
  return new Promise(async (resolve) => {
    const result1 = await promise1;
    const result2 = await promise2;

    return resolve(result1 + result2);
  });
}

// Usage example
addTwoPromises(
  Promise.resolve(2), Promise.resolve(2)
)
.then(console.log); // => 4
