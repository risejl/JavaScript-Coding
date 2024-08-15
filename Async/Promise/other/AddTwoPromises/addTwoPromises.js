/**
 * @param {Promise} promise1 
 * @param {Promise} promise2 
 * @return {Promise}
 */
async function addTwoPromises(promise1, promise2) {
  return new Promise (async (resolve) => {
    const res1 = await promise1;
    const res2 = await promise2;
    return resolve(res1 + res2);
  });
}

// example
// addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4