/**
 * @param {Array} arr
 * @param {Function} iteratee
 * @return {Array}
 */

function groupBy(arr, iteratee) {
  const result = {};
  const iterateeFn =
    typeof iteratee === "function" ? iteratee : (value) => value[iteratee];

  for (const item of arr) {
    const key = iterateeFn(item);

    if (!Object.hasOwn(result, key)) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
}

// Usage example
console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // => { '4': [4.2], '6': [6.1, 6.3] }

// Group by string length
console.log(groupBy(["one", "two", "three"], "length"));
// => { '3': ['one', 'two'], '5': ['three'] }

const users = [
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
];

// Group by a property of the objects
console.log(groupBy(users, "age"));
// => { '36': [{'user': 'barney', 'age': 36}], '40': [{'user': 'fred', 'age': 40}] }
