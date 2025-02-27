/**
 * @param {function} fn
 * @return {function}
 */

function flattenThunk(fn) {
  return function (callbackFn) {
    const resolveThunk = (err, result) => {
      if (err) {
        callbackFn(err, undefined);
        return;
      }

      if (typeof result === "function") {
        result(resolveThunk);
      } else {
        callbackFn(undefined, result);
      }
    };

    fn(resolveThunk);
  };
}

// Usage example
function fn1(callbackFn) {
  setTimeout(() => {
    callbackFn(null, "ok");
  }, 1000);
}

function fn2(callbackFn) {
  setTimeout(() => {
    callbackFn(null, fn1);
  }, 1000);
}

function fn3(callbackFn) {
  setTimeout(() => {
    callbackFn(null, fn2);
  }, 1000);
}

flattenThunk(fn3)((_, data) => {
  console.log(data); // 'ok'
});
