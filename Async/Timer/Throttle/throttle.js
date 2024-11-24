/**
 * @param {Function} fn
 * @param {number} wait
 * @return {Function}
 */

function throttle(fn, wait = 0) {
  let shouldThrottle = false;

  return function (...args) {
    if (shouldThrottle) {
      return;
    }

    shouldThrottle = true;
    setTimeout(() => {
      shouldThrottle = false;
    }, wait);

    fn.call(this, ...args);
  };
}

// Usage example
let i = 0;
function increment() {
  i++;
}
const throttledIncrement = throttle(increment, 100);

// t = 0: Call throttledIncrement(). i is now 1.
throttledIncrement(); // i = 1

// t = 50: Call throttledIncrement() again.
//  i is still 1 because 100ms have not passed.
throttledIncrement(); // i = 1

// t = 101: Call throttledIncrement() again. i is now 2.
//  i can be incremented because it has been more than 100ms
//  since the last throttledIncrement() call at t = 0.
throttledIncrement(); // i = 2

//---------------------------------------
// Support subsequent function calls during the throttle period
function throttle(fn, wait = 0) {
  let shouldThrottle = false;
  let savedArgs = null;
  let savedThis = null;

  return function (...args) {
    if (shouldThrottle) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    fn.call(this, ...args);
    shouldThrottle = true;

    setTimeout(() => {
      shouldThrottle = false;
      if (savedArgs) {
        fn.call(this, ...savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, wait);
  };
}

//---------------------------------------
// throttle with leading & trailing `options`
function throttle(func, wait, option = { leading: true, trailing: true }) {
  let waiting = false;
  let lastArgs = null;

  return function wrapper(...args) {
    if (!waiting) {
      waiting = true;

      const startWaitingPeriod = () =>
        setTimeout(() => {
          if (option.trailing && lastArgs) {
            func.apply(this, lastArgs);
            lastArgs = null;
            startWaitingPeriod();
          } else {
            waiting = false;
          }
        }, wait);

      if (option.leading) {
        func.apply(this, args);
      } else {
        lastArgs = args;
      }
      startWaitingPeriod();
    } else {
      lastArgs = args;
    }
  };
}
