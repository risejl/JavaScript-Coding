/**
 * @param {Function} callbackFn
 * @param {number} delay
 * @return {object}
 */

// use `requestAnimationFrame`
function mySetInterval(callbackFn, delay) {
  let timerId = null;
  let start = Date.now();

  // loop
  function loop() {
    const current = Date.now();

    if (current - start >= delay) {
      callbackFn();
      start = current;
    }

    timerId = requestAnimationFrame(loop);
  }

  // run loop
  loop();

  return {
    clear: () => cancelAnimationFrame(timerId),
  };
}

// -------------------------------------------

// use `setTimeout`
function mySetInterval(callbackFn, delay) {
  let timerId = null;
  let start = Date.now();
  let count = 0;

  // loop
  function loop() {
    const drift = Date.now() - start - count * delay;
    count += 1;

    timerId = setTimeout(() => {
      callbackFn();
      loop();
    }, delay - drift);
  }

  // run loop
  loop();

  return {
    clear: () => clearTimeout(timerId),
  };
}

// Usage example
const interval = mySetInterval(() => {
  console.log("Interval tick");
}, 1000);

// cancel
setTimeout(() => {
  interval.clear();
}, 5000);
