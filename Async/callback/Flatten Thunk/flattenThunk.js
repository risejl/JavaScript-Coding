/**
 * @param {function} fn
 * @return {function}
 */

function flattenThunk(fn) {
  return function (callbackFn) {
    function resolveThunk(err, result) {
      if (err) {
        callbackFn(err, undefined);
        return;
      }

      if (typeof result === 'function') {
        result(resolveThunk);
      } else {
        callbackFn(undefined, result);
      }
    }

    fn(resolveThunk);
  }
}

// Usage example
function fn1(callbackFn) {
  setTimeout(() => {
    callbackFn(null, 'ok');
  }, 10);
}

function fn2(callbackFn) {
  setTimeout(() => {
    callbackFn(null, fn1);
  }, 10);
}

function fn3(callbackFn) {
  setTimeout(() => {
    callbackFn(null, fn2);
  }, 10);
}

flattenThunk(fn3)((err, data) => {
  console.log(data); // 'ok'
});
