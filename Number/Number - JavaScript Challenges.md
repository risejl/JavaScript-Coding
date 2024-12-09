You can find all the code in this post in the repo [GitHub](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Number).

---

## Number related challenges

---

### Add comma to numbers

This challenge is about handling number formatting.

The solution is just simply to iterate the string and add a `,` every three digits from right to left and be careful about adding "," at the index `0`.

```js
/**
 * @param {number} num
 * @return {string}
 */

// Time: O(n) | Space: O(1)
function addComma(num) {
  const [integerStr, floatStr] = String(num).split(".");
  let count = 0;
  let result = "";

  for (let i = integerStr.length - 1; i >= 0; i -= 1) {
    count += 1;
    result = integerStr[i] + result;

    if (count % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }

  return floatStr ? result + `.${floatStr}` : result;
}

// Usage example
console.log(addComma(1)); // => '1'
console.log(addComma(1000)); // => '1,000'
console.log(addComma(-12345678)); // =>  '-12,345,678'
console.log(addComma(12345678.12345)); // =>  '12,345,678.12345'
```

---

### Add space to bank numbers

This is also a formatting challenge.

The idea is the same as above.

```js
/**
 * @param {string} num
 * @return {string}
 */

// Time: O(n) | Space: O(1)
function addSpacesEveryFourDigits(num) {
  const numStr = String(num);
  let result = "";

  for (let i = 0; i < numStr.length; i += 1) {
    result += numStr[i];

    if ((i + 1) % 4 === 0 && i + 1 !== numStr.length) {
      result += " ";
    }
  }

  return result.trim();
}

// Example usage:
console.log(addSpacesEveryFourDigits("1234567890")); // => "1234 5678 90"
```

---

### Arabic numerals to Chinese characters

This challenge is about localization.

We can use a `Map` or an array to store the word-bindings. Iterating the string and converting each digit.

```js
/**
 * @param {string} arabicNumber
 * @return {string}
 */

// Time: O(n) | Space: O(n)
function arabicToChineseNumber(arabicNumber) {
  const map = {
    0: "零",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    7: "七",
    8: "八",
    9: "九",
  };
  // or
  // const map = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
  let result = "";

  const stArr = arabicNumber.split("");
  for (let i = 0; i < stArr.length; i += 1) {
    result += map[stArr[i]];
  }

  return result;
}
// Usage example
console.log(arabicToChineseNumber("12345")); // => "一二三四五"
```

---

### Big integer addition

A common interview question.

The `Number` type in JavaScript can't precisely represent numbers outside the range of `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`.

```js
/**
 * @param {string} numStr1
 * @param {string} numStr2
 * @return {string}
 */

// Time: O(n) | Space: O(n)
function add(num1, num2) {
  const num1Arr = num1.split("").map(Number);
  const num2Arr = num2.split("").map(Number);
  let carry = 0;
  let result = [];

  while (num1Arr.length || num2Arr.length || carry) {
    const sum = (num1Arr.pop() ?? 0) + (num2Arr.pop() ?? 0) + carry;
    carry = sum > 9 ? 1 : 0;
    result.push(sum % 10);
  }

  return result.reverse().join("");
}

// Usage example
console.log(add("999999999999999999", "1")); // => '1000000000000000000'
```

---

### Clamp

The function clamps a middle value within a range between a defined minimum and maximum bound.

The function takes three parameters: a preferred value, a minimum value, and a maximum allowed value.

```js
/**
 * @param {number} value
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */

// Time: O(1) | Space: O(1)
function clamp(value, lower, upper) {
  return Math.min(upper, Math.max(lower, value));
  // or
  // return Math.min(upper, Math.max(lower, value));
}

// Usage example
console.log(clamp(12, 0, 1)); // => 1
console.log(clamp(12, 5, 13)); // => 12
console.log(clamp(12, 15, 100)); // => 15
```

---

### FizzBuzz

Simply check whether the number is divisible by 3 or/and 5.

```js
/**
 * @param {number} num
 * @return {string | number}
 */

// Time: O(1) | Space: O(1)
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

// Example usage
console.log(fizzBuzz(15)); // => "FizzBuzz"
console.log(fizzBuzz(10)); // => "Buzz"
console.log(fizzBuzz(7)); // => 7
console.log(fizzBuzz(9)); // => 9
```

---

### Is integer

Use `Number.isInteger()` to differentiate the integer and floating numbers.

```js
/**
 * @param {any} value
 * @return {boolean}
 */

// Time: O(1) | Space: O(1)
function isInteger(value) {
  return Number.isInteger(value);
}

// Usage example
console.log(isInteger(10)); // => true
console.log(isInteger(10.5)); // => false
```

---

### Merge continuous numbers

Simply loop the number array.

```js
/**
 * @param {Array} Array
 * @return {arr}
 */

// Time: O(n) | Space: O(n)
function mergeContinousNumbers(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }

  const merged = [];
  let start = arr[0];
  let end = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] === end + 1) {
      end = arr[i];
    } else {
      if (start === end) {
        merged.push(String(start));
      } else {
        merged.push(`${start}->${end}`);
      }

      start = end = arr[i];
    }
  }

  if (start === end) {
    merged.push(String(start));
  } else {
    merged.push(`${start}->${end}`);
  }

  return merged;
}

// Usage example
console.log(mergeContinousNumbers([1, 2, 3, 4, 6, 7, 9, 13, 15])); // => ['1->4', '6->7', '9', '13', '15']
```

---

### Rand7

```js
function rand5() {
  return Math.floor(Math.random() * 5);
}

/**
 * @return {number}
 */

// Time: O(1) | Space: O(1)
function rand7() {
  const num = 5 * rand5() + rand5();
  if (num < 21) {
    return num % 7;
  }
}

// Usage example
console.log(rand7());
```

---

### Round to two decimal places

A common practice of dealing with float numbers.

We need to use `Number.prototype.toFixed(3)` to return a **string** of the given number using fixed-point notation with 3 decimal places and use `String.prototype.slice(0, -1)` to slice the first two decimal places.

```js
/**
 * @param {any} value
 * @returns any
 */

// Time: O(1) | Space: O(1)
function fixedTwoDigits(value) {
  if (typeof value !== "number") {
    return value;
  }

  return Number(value.toFixed(3).slice(0, -1));
}

// Usage example
console.log(fixedTwoDigits(Math.random())); // => 0.xx
```

---

### Sampling

Fisher-Yates algorithm.

```js
/**
 * @param {Array} arr - The array to sample from.
 * @param {number} size - The number of elements to sample.
 * @return {Array} - An array containing the sampled elements.
 */

// Time: O(n) | Space: O(n)
function sampleSize(arr, size) {
  if (size > arr.length) {
    throw new Error("Size cannot be greater than the array length");
  }

  const shuffled = [...arr];

  for (let i = 0; i < shuffled.length; i += 1) {
    const randIdx = Math.floor(Math.random() * shuffled.length);
    [shuffled[i], shuffled[randIdx]] = [shuffled[randIdx], shuffled[i]];
  }

  return shuffled.slice(0, size);
}

// Example usage
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sampledElements = sampleSize(myArray, 3);
console.log(sampledElements); // => [2, 5, 7]
```

---

## Reference

- [clamp() - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [GreatFrontEnd](https://www.greatfrontend.com/)
- [62. implement BigInt addition - BFE.dev](https://bigfrontend.dev/problem/add-BigInt-string)
- [65. add comma to number - BFE.dev](https://bigfrontend.dev/problem/add-comma-to-number)
- [470. Implement Rand10() Using Rand7() - LeetCode](https://leetcode.com/problems/implement-rand10-using-rand7/description/)

```

```
