/**
 * @param {Function} func 
 * @param {number} wait 
 * @return {Function}
 */
function throttle(func, wait = 0) {
  let shouldThrottle = false;

  return function (...args) {
    if (shouldThrottle) {
      return;
    }

    shouldThrottle = true;
    setTimeout(function () {
      shouldThrottle = false;
    }, wait);

    func.call(this, ...args);
  }
}

// example
/*
let i = 0;
function increment() {
  i++;
  console.log('i = ', i);
}
const throttledIncrement = throttle(increment, 100);

// t = 0: Call throttledIncrement(). i is now 1.
console.log(throttledIncrement()); // i = 1

// t = 50: Call throttledIncrement() again.
//  i is still 1 because 100ms have not passed.
console.log(throttledIncrement()); // i = 1

// t = 101: Call throttledIncrement() again. i is now 2.
//  i can be incremented because it has been more than 100ms
//  since the last throttledIncrement() call at t = 0.
console.log(throttledIncrement()); // i = 2
*/