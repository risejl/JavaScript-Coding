function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};


function logNumbers() {
  return sleep(1000)
    .then(() => {
      console.log(1); // => 1
      return sleep(1000);
    })
    .then(() => {
      console.log(2); // => 2
      return sleep(1000);
    })
    .then(() => {
      console.log(3); // => 3
      return sleep(1000);
    });
}

// Usage example
logNumbers()
  .then(() => {
    console.log('finished!'); // => 'finished!'
  });