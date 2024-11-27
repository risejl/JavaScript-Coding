You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/String/prototype).

---

## String prototype related challenges

---

### `String.prototype.repeat()`

The key here is to handle different edge cases.

```js
/**
 * @param {number} count
 * @return {string}
 */

// Time: O(1) | Space: O(1)
String.prototype.myRepeat = function (count) {
  if (count < 0) {
    throw new RangeError("count must be non-negative");
  }

  if (count === 0) {
    return "";
  }

  return Array.from({ length: Math.round(count) + 1 }).join(this);
};

// Usage example
console.log("abc".myRepeat(0)); // => ""
console.log("abc".myRepeat(1)); // => "abc"
console.log("abc".myRepeat(2)); // => "abcabc"
console.log("abc".myRepeat(-1)); // => RangeError
```

---

### `String.prototype.trim()`

Use regular expressions to make your day easier:

- `//` for regular expression
- `^` matches the beginning
- `$` matches the ending
- `g` matches all the patterns
- `|` acts like logic OR operator
- `+` means one or more characters
- `\s` matches all whitespace(spaces, tabs, line breaks)

```js
/**
 * @param {strint} str
 * @return {string}
 */

// Time: O(1) | Space: O(1)
String.prototype.myTrim = function () {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  // or
  // return this.replace(/^[\s]+|[\s]+$/g, "");
};

// Usage example
const str = "  Hello, World!  ";
console.log(str.myTrim()); // => "Hello, World!"
```

---

## Reference

- [String.prototype.repeat() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
- [String.prototype.trim() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [95. implement String.prototype.trim() - BFE.dev](https://bigfrontend.dev/problem/implement-String-prototype-trim)
