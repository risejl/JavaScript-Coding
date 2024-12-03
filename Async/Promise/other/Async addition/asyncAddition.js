function add(a, b) {
  return Promise.resolve(a + b);
}

/* `add()` is already implemented, please implement `sum()` */
// Solution 1 sequential
async function sum(iterable) {
  let result = iterable[0];

  for (let i = 1; i < iterable.length; i += 1) {
    result = await add(result, iterable[i]);
  }

  return result;
}

// Usage example
async function total() {
  const res1 = await sum([1, 2, 3, 4, 5, 6, 4]);
  const res2 = await sum([1, 2, 3, 4, 5, 6, 4]);
  return [res1, res2];
}

total().then((result) => console.log(result));

// Solution 2 concurrent with limited concurrency
function chunk(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunked = arr.slice(i, i + size);
    result.push(chunked);
  }

  return result;
}

function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolved = 0;
    let nextIndex = 0;
    let len = iterable.length;

    if (len === 0) {
      resolve(results);
      return;
    }

    async function processItem(index) {
      nextIndex += 1;

      try {
        const result = await callbackFn(iterable[index]);
        results[index] = result;
        resolved += 1;

        if (resolved === len) {
          resolve(results);
          return;
        }

        if (nextIndex < len) {
          processItem(nextIndex);
        }
      } catch (err) {
        reject(err);
      }
    }

    for (let i = 0; i < Math.min(len, size); i += 1) {
      processItem(i);
    }
  });
}

async function sum(iterable, concurrency) {
  if (iterable.length === 1) {
    return iterable[0];
  }

  return mapAsyncLimit(
    chunk(iterable, 2),
    ([x, y]) => {
      return y === undefined ? x : add(x, y);
    },
    concurrency
  ).then((iterable) => sum(iterable, concurrency));
}

// Usage example
async function total() {
  const res1 = await sum([1, 2, 3, 4, 5, 6, 4], 2);
  const res2 = await sum([1, 2, 3, 4, 5, 6, 4], 2);
  return [res1, res2];
}

total().then((result) => console.log(result));
