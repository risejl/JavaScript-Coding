function asyncAdd(a, b, callbackFn) {
  setTimeout(() => {
    callbackFn(null, a + b);
  }, Math.random() * 1000);
}

async function sum(...args) {
  let total = 0;

  // helper
  const add = (a, b) => {
    return new Promise((resolve) => {
      asyncAdd(a, b, (err, result) => {
        if (err) {
          throw err;
        }
        resolve(result);
      });
    });
  };

  for (const arg of args) {
    total = await add(total, arg);
  }

  return total;
}

// Usage example
async function total() {
  const res1 = await sum(1, 2, 3, 4, 5, 6, 4);
  const res2 = await sum(1, 2, 3, 4, 5, 6, 4);
  return [res1, res2];
}

total().then((result) => console.log(result));
