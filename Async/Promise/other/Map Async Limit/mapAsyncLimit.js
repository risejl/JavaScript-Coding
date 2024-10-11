/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 * @param {number} size
 * @return {Promise}
 */

// Chunk approach
async function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  const results = [];

  for (let i = 0; i < iterable.length; i += size) {
    const chunk = iterable.slice(i, i + size);
    const chunkResults = await Promise.all(chunk.map(callbackFn));
    
    results.push(...chunkResults);
  }

  return results;
}

// Chunkless approach
function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolved = 0;
    let nextIndex = 0;
    let len = iterable.length;

    if (!len) {
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

// Promise-based
function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolved = 0;
    let nextIndex = 0;
    let len = iterable.length;

    if (!len) {
      resolve(results);
      return;
    }

    function processItem(index) {
      nextIndex += 1;

      callbackFn(iterable[index])
        .then((result) => {
          results[index] = result;
          resolved += 1;

          if (resolved === len) {
            resolve(results);
            return;
          }

          if (nextIndex < len) {
            processItem(nextIndex);
          }
        }).catch(reject);
    }

    for (let i = 0; i < Math.min(len, size); i += 1) {
      processItem(i);
    }
  });
}

// Usage example
function asyncSquare(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Processing ${x}`);
      resolve(x * x);
    }, Math.random() * 1000);
  });
}

// Usage example
async function runExample() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunkSize = 3;

  console.log("Starting async processing...");
  
  const results = await mapAsyncLimit(numbers, asyncSquare, chunkSize);
  
  console.log("All processing complete.");
  console.log("Results:", results);
}

runExample();

/*
Starting async processing...
Processing 1
Processing 2
Processing 3
Processing 4
Processing 5
Processing 6
Processing 7
Processing 8
Processing 9
Processing 10
All processing complete.
Results: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
*/