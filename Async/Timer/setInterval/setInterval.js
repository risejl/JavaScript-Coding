// use `requestAnimationFrame`

function mySetInterval(callbackFn, delay) {
  let timerId = null;
  let start = Date.now();

  function loop() {
    const current = Date.now();

    if (current - start >= delay) {
      callbackFn();
      start = current;
    }
    timerId = requestAnimationFrame(loop);
  }

  loop();

  return {
    clear: () => cancelAnimationFrame(timerId)
  };
}

/*
const interval = mySetInterval(() => {
    console.log('Interval tick');
}, 1000);

// cancel
interval.clear();
*/



// use `setTimeout`
function mySetInterval(callbackFn, delay) {
  let timerId = null;
  let start = Date.now();
  let count = 0;

  function loop() {
    const drift = Date.now() - start - count * delay;
    count += 1;

    timerId = setTimeout(() => {
      callbackFn();
      loop();
    }, delay - drift);
  }

  loop();

  return {
    clear: () => clearTimeout(timerId);
  }
}

/*
const interval = mySetInterval(() => {
    console.log('Interval tick at', new Date().toISOString());
}, 1000);

// To stop the interval after 5 seconds:
setTimeout(() => {
    interval.clear();
    console.log('Interval stopped');
}, 5000);
*/