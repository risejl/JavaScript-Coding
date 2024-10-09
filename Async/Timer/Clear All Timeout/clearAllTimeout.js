/**
 * cancel all timer from window.setTimeout
 */

const timerQueue = [];

const originalSetTimeout = window.setTimeout;

window.setTimeout = function (callbackFn, delay, ...args) {
  const timerId = originalSetTimeout(callbackFn, delay, ...args);
  timerQueue.push(timerId);

  return timerId;
}


function clearAllTimeout() {
  while (timerQueue.length) {
    clearTimeout(timerQueue.pop());
  }
}


// Usage example
setTimeout(func1, 10000)
setTimeout(func2, 10000)
setTimeout(func3, 10000)
// all 3 functions are scheduled 10 seconds later
clearAllTimeout()
// all scheduled tasks are cancelled.
