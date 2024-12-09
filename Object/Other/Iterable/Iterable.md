You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Object/Other/Iterable).

---

## Iterable related challenges

---

### Iterable

Rewriting the `Symbol.iterator` properity to create an iterator object.

The iterator object includes two properties:

1. `value`: the current value of the current iteration call, `undefined` when the iterator is over.
2. `done`: whether the iteration has finished.

```js
/**
 * @param {any} data
 * @return {object}
 */

function createCustomIterable(data) {
  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < data.length) {
            return {
              value: data[index++],
              done: false,
            };
          } else {
            return {
              value: undefined,
              done: true,
            };
          }
        },
      };
    },
  };
}

// Usage example:
const customIterable = createCustomIterable([1, 2, 3, 4]);

// Using for...of loop
for (const item of customIterable) {
  console.log(item);
}
/**
 * 1
 * 2
 * 3
 * 4
 */

// Using spread operator
const arrayFromIterable = [...customIterable];
console.log(arrayFromIterable); // => [1, 2, 3, 4]

// Using Array.from()
const anotherArray = Array.from(customIterable);
console.log(anotherArray); // => [1, 2, 3, 4]
```

---

## Reference

- [Iterator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)
- [Iteration protocols - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)
- [Iterator.prototype[Symbol.iterator]() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
