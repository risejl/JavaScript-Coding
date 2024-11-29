function ping(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ping successful");
    }, delay);
  });
}

function calc(interval) {
  let start = Date.now();
  let count = 0;
  let timerId = null;

  function loop() {
    const drift = Date.now() - start - count * interval;
    count += 1;

    timerId = setTimeout(async () => {
      const result = await ping(1000);
      console.log(result);

      const elapsedTime = Math.floor((Date.now() - start) / 1000);
      console.log(`Elapsed time: ${elapsedTime} seconds`);

      loop();
    }, interval - drift);
  }

  loop();

  return {
    clear: () => {
      clearTimeout(timerId);
      console.log("Ping calculation aborted.");
    },
  };
}

// Example usage:
const pingCalculator = calc(5000);

setTimeout(() => {
  pingCalculator.clear();
}, 20000); // Stops after 20 seconds

/*
Ping successful
Elapsed time: 6 seconds
Ping successful
Elapsed time: 11 seconds
Ping successful
Elapsed time: 16 seconds
Ping calculation aborted.
*/
