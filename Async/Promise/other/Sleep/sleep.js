/**
 * @param {number} duration
 * @return {Promise<void>}
 */
async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

/*
async function greeting() {
  console.log('Hello!');
  await sleep(2000);
  console.log('Bye.'); // Only logs after 2000 milliseconds (2 seconds)
}

greeting();
// t = 0: Hello!
// t = 2000: Bye.
*/