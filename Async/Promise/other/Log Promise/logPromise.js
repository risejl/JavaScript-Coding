function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};


// promise based
function logNumbers() {
  let promise = Promise.resolve();

  for (let i = 1; i <= 5; i += 1) {
    promise = promise.then(() => {
      console.log(i);
      return sleep(1000);
    });
  }

  return promise;
}

// async-await based
async function logNumbers() {
  for (let i = 1; i <= 5; i += 1) {
    console.log(i);
    await sleep(1000);
  }
}

// Usage example
logNumbers()
  .then(() => {
    console.log('finished!'); // => 'finished!'
  });