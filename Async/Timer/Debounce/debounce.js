/**
 * @param {Function} func 
 * @param {number} wait 
 * @return {Function}
 */
function debounce(func, wait = 0) {
  let timeoutId = null;

  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(function () {
      timeoutId = null;
      func.call(context, ...args);
    }, wait);
  }
}

// example
/*
const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // 'Hello' Logged at t=100ms
*/