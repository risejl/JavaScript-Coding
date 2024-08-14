/**
 * @param {number} duration
 * @return {Promise<void>}
 */

async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  });
}

// example
/*
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
*/
