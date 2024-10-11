/**
 * @param {() => Promise<any>} fns 
 * @param {number} max 
 * @return {Promise}
 */

function throttlePromises(fns, max) {
  const results = [];
  
  async function doWork(iterator) {
    for (let [index, element] of iterator) {
      const result = await element();
      results[index] = result;
    }
  }

  const iterator = Array.from(fns).entries();
  const workers = Array(max).fill(iterator).map(doWork);

  return Promise.all(workers).then(() => results);
}

// Usage example
const asyncFunctions = [
  () => new Promise(resolve => setTimeout(() => resolve('Task 1'), 1000)),
  () => new Promise(resolve => setTimeout(() => resolve('Task 2'), 1500)),
  () => new Promise(resolve => setTimeout(() => resolve('Task 3'), 800)),
  () => new Promise(resolve => setTimeout(() => resolve('Task 4'), 1200)),
  () => new Promise(resolve => setTimeout(() => resolve('Task 5'), 900))
];

const maxConcurrent = 2;

throttlePromises(asyncFunctions, maxConcurrent)
  .then(results => {
    console.log('All tasks completed');
    console.log('Results:', results);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

// All tasks completed
// Results: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']