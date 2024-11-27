/**
 * @return {Function}
 */

// Time: O(1) | Space: O(1)
function createHelloWorld() {
  return function (...args) {
    return "Hello World";
  };
}

// Usage example
const output = createHelloWorld();
console.log(output()); // => "Hello World"
