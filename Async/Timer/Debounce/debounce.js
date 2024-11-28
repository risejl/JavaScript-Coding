/**
 * @param {Function} fn
 * @param {number} wait
 * @return {Function}
 */

function debounce(fn, wait = 0) {
  let timerId = null;

  return function (...args) {
    const context = this;
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId = null;
      fn.call(context, ...args);
    }, wait);
  };
}

// Usage example
let i = 0;
function increment() {
  i += 1;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
//  Call debouncedIncrement() again.
debouncedIncrement(); // i = 0

// t = 100: i is still 0 because it has only
//  been 50ms since the last debouncedIncrement() at t = 50.

// t = 150: Because 100ms have passed since
//  the last debouncedIncrement() at t = 50,
//  increment was invoked and i is now 1 .

//--------------------------------------------------------------------
// debounce with leading & trailing `options`
function debounce(func, wait, option = { leading: false, trailing: true }) {
  let timerId = null;
  let leadingCallArgs = null;

  return function (...args) {
    if (!timerId && option.leading) {
      leadingCallArgs = args;
      func.apply(this, args);
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      if (args !== leadingCallArgs && option.trailing) {
        func.apply(this, args);
      }
      timerId = null;
      leadingCallArgs = null;
    }, wait);
  };
}

//--------------------------------------------------
// Advanced version of debounce
function debounce(func, wait = 0) {
  let timeoutId = null;
  let context = undefined;
  let argsToInvoke = undefined;

  function clearTimer() {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  function invoke() {
    if (timeoutId == null) {
      return;
    }

    clearTimer();
    func.call(context, ...argsToInvoke);
  }

  function fn(...args) {
    clearTimer();
    argsToInvoke = args;
    context = this;
    timeoutId = setTimeout(function () {
      invoke();
    }, wait);
  }

  fn.cancel = clearTimer;
  fn.flush = invoke;
  return fn;
}
