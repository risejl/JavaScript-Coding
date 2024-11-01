/**
 * @return {Function}
 */

function createHelloWorld() {
  return function (...args) {
    return "Hello World";
  };
}

// Usage example
const output = createHelloWorld();
console.log(output()); // => "Hello World"
