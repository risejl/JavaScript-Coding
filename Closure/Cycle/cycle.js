/**
 * @template T
 * @param  {...T} values
 * @returns () => T
 */

function cycle(...values) {
  let index = -1;

  return function (...args) {
    index = (index + 1) % values.length;
    return values[index];
  }
}

/*
const helloFn = cycle('hello');
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle('on', 'off');
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"
*/