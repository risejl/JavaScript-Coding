/**
 * @param {Function} fn
 * @return {Function}
 */

function once(fn) {
  let ranOnce = false;
  let value;

  return function (...args) {
    if (!ranOnce) {
      value = fn.call(this, ...args);
      ranOnce = true;
    }

    return value;
  }
}

/*
function func(num) {
  return num;
}

const onced = once(func);
onced(1); // 1, func called with 1
onced(2); // 1, even 2 is passed, previous result is returned 
*/