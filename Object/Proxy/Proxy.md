You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Object/Proxy/accessNegativeIndex).

---

## Proxy related challenges

---

### Access negative index

`Proxy` can intercept operations of objects. We can use it to rewriting or enhancing the behavior of accessing and setting properties.

```js
/**
 * @param {Array} arr
 */

function withNegativeIndex(arr) {
  return new Proxy(arr, {
    get(target, property, receiver) {
      const index = Number(property);

      if (index < 0) {
        property = target.length + index;
      }

      return Reflect.get(target, property, receiver);
    },
  });
}

// Usage example
const fruits = ["apple", "banana", "orange"];
const proxiedFruits = withNegativeIndex(fruits);

console.log(proxiedFruits[-1]); // => 'orange'
console.log(proxiedFruits[-2]); // => 'banana'
console.log(proxiedFruits[-3]); // => 'apple'
console.log(proxiedFruits[0]); // => 'apple'
console.log(proxiedFruits[1]); // => 'banana'
console.log(proxiedFruits[2]); // => 'orange'
```

---

## Reference

- [Proxy - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
