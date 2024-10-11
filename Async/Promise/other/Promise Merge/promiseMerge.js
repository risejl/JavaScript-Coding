function isPlainObject(value) {
  // For null and undefined
  if (value == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function mergeResult(result1, result2) {
  try {
    if (typeof result1 === 'number' && typeof result2 === 'number') {
      return result1 + result2;
    }
    
    if (typeof result1 === 'string' && typeof result2 === 'string') {
      return result1 + result2;
    }

    if (Array.isArray(result1) && Array.isArray(result2)) {
      return [...result1, ...result2];
    }

    if (isPlainObject(result1) && isPlainObject(result2)) {
      return { ...result1, ...result2 };
    }

    throw 'Unsupported data types';
  } catch {
    throw 'Unsupported data types';
  }
}

/**
 * @param {Promise} p1
 * @param {Promise} p2
 * @return {Promise<any>}
 */
function promiseMerge(p1, p2) {
  let unresolved = 2;
  let p1Result;
  let p2Result;

  return new Promise((resolve, reject) => {
    function then() {
      unresolved -= 1;
      if (!unresolved) {
        resolve(mergeResult(p1Result, p2Result));
      }
    }

    p1.then((result) => {
      p1Result = result;
      then();
    }).catch(reject);

    p2.then((result) => {
      p2Result = result;
      then();
    }).catch(reject);
  });
}

// Usage example

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);

promiseMerge(p1, p2)
  .then((result) => {
    console.log(result); // => 30
  });