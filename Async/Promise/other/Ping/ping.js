function ping(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Ping successful');
    }, delay);
  });
}

function calc(interval) {
  let start = Date.now();
  let count = 0;
  let timerId = null;
  let isActive = true;

  function loop() {
    const drift = Date.now() - start - count * interval;
    count += 1;

    timerId = setTimeout(() => {
      if (!isActive) {
        return;
      }

      ping(1000).then((result) => {
        console.log(result);

        const elapsedTime = Math.floor((Date.now() - start) / 1000);
        console.log(`Elapsed time: ${elapsedTime} seconds`);

        loop();
      });
    }, interval - drift);
  }

  loop();

  return {
    clear: () => {
      isActive = false;
      clearTimeout(timerId);
      console.log('Ping calculation aborted.');
    }
  };
}

// Usage example
const abortCalc = calc(5000);

setTimeout(() => {
  abortCalc.clear();
}, 15000);

/*
Ping successful
Elapsed time: 6 seconds
Ping successful
Elapsed time: 11 seconds
Ping calculation aborted.
*/