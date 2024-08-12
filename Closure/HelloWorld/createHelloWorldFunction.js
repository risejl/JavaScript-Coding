/**
 * @return {Function}
 */

const createHelloWorld = function () {
  return function (...args) {
    return 'Hello World';
  }
}

// example
/*
const f = createHelloWorld();
console.log(f()); // 'Hello World'
*/