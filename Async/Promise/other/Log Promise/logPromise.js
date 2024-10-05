async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function logNumbers() {
  return sleep(1000)
    .then(() => {
      console.log(1);
      return sleep(1000);
    })
    .then(() => {
      console.log(2);
      return sleep(1000);
    })
    .then(() => {
      console.log(3);
      return sleep(1000);
    });
}

logNumbers().then(() => console.log('Done'));