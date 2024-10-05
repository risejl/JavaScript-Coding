/**
* @return {Function}
*/

function createHelloWorld() {
  return function (...args) {
    return 'Hello World';
  }
}

// const output = createHelloWorld();
// console.log(output());