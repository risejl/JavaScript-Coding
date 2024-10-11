/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */

function countBy(arr, iteratee) {
  const result = Object.create(null);

  for (const item of arr) {
    const key = String(iteratee(item));
    result[key] ??= 0;
    result[key] += 1;
  }

  return result;
}

// console.log(countBy([6.1, 4.2, 6.3], Math.floor)); // => { '4': 1, '6': 2 }
// console.log(countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n)); // => { '3': 2, '5': 1 }
// console.log(countBy([], (o) => o)); // => {}
// console.log(countBy([{ n: 1 }, { n: 2 }], (o) => o.m)); // => { undefined: 2 }