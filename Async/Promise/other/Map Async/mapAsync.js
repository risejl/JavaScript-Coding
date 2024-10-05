/**
 * @params {Array} iterable
 * @params {callbackFn} Function
 * @return {Array}
 */

function mapAsync(iterable, callbackFn) {
  return new Promise((resolve, reject) => {
    const results = Array.from({ length: iterable.length });
    let unresolved = iterable.length;

    if (!unresolved) {
      resolve(results);
      return;
    }

    iterable.forEach((item, index) => {
      callbackFn(item)
        .then((value) => {
          results[index] = value;
          unresolved -= 1;

          if (!unresolved) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

/*
const asyncDouble = (x) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 10);
  });

const doubled = await mapAsync([1, 2], asyncDouble);
console.log(doubled); // [2, 4]
*/