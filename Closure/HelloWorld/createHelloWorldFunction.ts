const createHelloWorld = function () {
  return function(...args: any[]) {
    return 'Hello World';
  }
}

// example
/*
const f = createHelloWorld();
console.log(f()); // 'Hello World'
*/