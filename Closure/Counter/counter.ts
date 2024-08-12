const createCounter = function (init: number): Object {
  let num = init;

  return {
    increment: function () {
      return ++num;
    },
    decrement: function () {
      return --num;
    },
    reset: function () {
      num = init;
      return num;
    }
  }
}

// example
/*
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
*/