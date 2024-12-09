You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/String/other).

---

## String related challenges

---

### Alphanumeric

It's often used as a helper function.

- Solution 1: You can use regular expressions to match all the characters and numbers.
- Solution 2: You can just check using if statements.

```js
/**
 * @param {any} char
 * @return {Boolean}
 */

// Solution 1
// Time: O(1) | Space: O(1)
function isAlphaNumeric(char) {
  return /[A-Za-z0-9]/.test(char);
}

// Solution 2
// Time: O(1) | Space: O(1)
function isAlphaNumeric(char) {
  if (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z") ||
    (char >= 0 && char <= 9)
  ) {
    return true;
  } else {
    return false;
  }
}

// Usage example
console.log(isAlphaNumeric("a")); // => true
console.log(isAlphaNumeric(0)); // => true
console.log(isAlphaNumeric("!")); // => false
```

---

### Camel case <-> Snake case

These are the two common naming conventions for programming languages.

- For camel case to snake case, you want to replace all the upper case characters with `_`.
- For snake case to camel case, you want to match all the `_` characters, skip it and convert the next first character to upper case.

Solution 1: use regular expressions
Solution 2: iterative approach

```js
/* camel case to snake case */

/**
 * @param {string} str
 * @return {string}
 */

// Solution 1
// Time: O(1) | Space: O(1)
function toSnakeCase(str) {
  let temp = str.replace(/[A-Z]/g, function (i) {
    return "_" + i.toLowerCase();
  });

  if (temp[0] === "_") {
    temp = temp.slice(1);
  }

  return temp;
}

// Solution 2
// Time: O(n) | Space: O(1)
function toSnakeCase(str) {
  let temp = "";

  for (const char of str) {
    if (char >= "A" && char <= "Z") {
      temp += "_" + char.toLowerCase();
    } else {
      temp += char;
    }
  }

  return temp;
}

// Usage example
console.log(toSnakeCase("testMethod")); // => "test_method"

/* snake case to camel case */
/**
 * @param {string} str
 * @return {string}
 */

// Solution 1
// Time: O(1) | Space: O(1)
function toCamelCase(str) {
  return str.replace(
    /([a-z])_([a-z])/gi,
    (_, left, right) => left + right.toUpperCase()
  );
}

// Solution 2
// Time: O(n) | Space: O(1)
function toSnakeCase(str) {
  let temp = "";
  const len = str.length;
  let count = 0;

  while (count < len) {
    if (str[count] === "_") {
      temp += str[count + 1].toUpperCase();
      count += 2;
    } else {
      temp += str[count];
      count += 1;
    }
  }

  return temp;
}

// Usage example
console.log(toCamelCase("test_method")); // => "testMethod"
```

---

### Compare version numbers

It's used for semantic versioning.

The solution structure is similar to the one for big integer numbers addition.

```js
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function compareVersion(version1, version2) {
  const v1Arr = version1.split(".");
  const v2Arr = version2.split(".");

  for (let i = 0; i < Math.max(v1Arr.length, v2Arr.length); i++) {
    const v1Num = Number(v1Arr[i] ?? 0);
    const v2Num = Number(v2Arr[i] ?? 0);

    if (v1Num > v2Num) {
      return 1;
    } else if (v1Num < v2Num) {
      return -1;
    }
  }

  return 0;
}

// Usage example
console.log(compareVersion("12.1.0", "12.0.9")); // => 1, meaning first one is greater
console.log(compareVersion("12.1.0", "12.1.2")); // => -1, meaning latter one is greater
console.log(compareVersion("5.0.1", "5.0.1")); // => 0, meaning they are equal.
```

---

### Compress a string

This solution for this challenge is used for text encoding like sparse storage which can reduce memory usage.

```js
/**
 * @param {string} str
 * @return {string}
 */

// Time: O(n) | Space: O(1)
function compress(str) {
  if (!str) {
    return "";
  }

  let compressed = "";
  let count = 1;

  for (let i = 1; i <= str.length; i += 1) {
    if (i < str.length && str[i] === str[i - 1]) {
      count += 1;
    } else {
      compressed += str[i - 1];
      if (count > 1) {
        compressed += count;
      }
      count = 1;
    }
  }

  return compressed;
}

// Usage example
console.log(compress("a")); // 'a'
console.log(compress("aa")); // 'a2'
console.log(compress("aaa")); // 'a3'
console.log(compress("aaab")); // 'a3b'
console.log(compress("aaabb")); // 'a3b2'
console.log(compress("aaabba")); // 'a3b2a'
```

---

### Find the length of the longest word in a string

Split the string first and then count the longest word length.

```js
/**
 * @param {string} str
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function longestLength(str) {
  const strArr = str.split(" ");
  let maxLen = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > maxLen) {
      maxLen = strArr[i].length;
    }
  }
  return maxLen;
}

// Usage example
console.log(longestLength("The longest word is thelongestword")); // => 14
```

---

### Find the word with longest length in a string

Similar structure with the above one, just use one more variable to store the word with maximum length.

```js
/**
 * @param {string} str
 * @return {string[]}
 */

// Time: O(n) | Space: O(n)
function longestWord(str) {
  const strArr = str.split(" ");
  let maxLen = 0;
  let maxWord = "";

  for (const char of strArr) {
    if (char.length > maxLen) {
      max = char.length;
      maxWord = char;
    }
  }

  return maxWord;
}

// Usage example
console.log(longestWord("The longest word is thelongestword")); // => "thelongestword"
```

---

### Most frequently occurring character

Use a `map` to store the characters and their occurrences.

```js
/**
 * @param {string} str
 * @returns {string | string[]}
 */

// Time: O(n) | Space: O(n)
function count(str) {
  const map = new Map();
  const result = [];

  for (const char of str) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  const max = Math.max(...map.values());

  for (const [key, value] of map) {
    if (value === max) {
      result.push(key);
    }
  }

  return result.length === 1 ? result[0] : result;
}

// Usage example
console.log(count("abbccc")); // => 'c'
console.log(count("abbcccddd")); // => ['c', 'd'];
```

---

### Get string length(support emojis)

Traditionally, emojis may count as two characters long when using `.length` to get string length.

To count emojis as one character long, you can use the new `Intl.Segmenter()`.

```js
/**
 * @param {String} str
 * @return {Number}
 */

// Time: O(1) | Space: O(1)
function getStringLength(str) {
  return Array.from(new Intl.Segmenter().segment(str)).length;
}

// Usage example
console.log(getStringLength("test😁")); // => 5
console.log("test😁".length); // => 6
```

---

### Uncompress a string

A paired challenge for the above one.

Common patterns used in computer science:

- encode, decode
- compress, uncompress

```js
/**
 * @param {string} str
 * @returns {string}
 */

// Time: O(n) | Space: O(n)
function uncompress(str) {
  const stack = [];
  let currentNum = 0;
  let currentStr = "";

  for (const char of str) {
    if (char >= "0" && char <= "9") {
      currentNum = currentNum * 10 + Number(char);
    } else if (char === "(") {
      stack.push([currentStr, currentNum]);
      currentStr = "";
      currentNum = 0;
    } else if (char === ")") {
      const [prevStr, num] = stack.pop();
      currentStr = prevStr + currentStr.repeat(num);
    } else {
      currentStr += char;
    }
  }

  return currentStr;
}

// Usage example
console.log(uncompress("3(ab)")); // => 'ababab'
console.log(uncompress("3(ab2(c))")); // => 'abccabccabcc'
```

---

### Version numbers sorting

This one takes a similar approach to the last one but put the comparsion logic into the sorting function.

```js
/**
 * @param {string[]} versions
 * @return {string[]}
 */

// Time: O(n^2logn) | Space: O(n)
function sortVersions(versionsArr) {
  versionsArr.sort((a, b) => {
    const aArr = a.split(".");
    const bArr = b.split(".");

    for (let i = 0; i < Math.max(aArr.length, bArr.length); i += 1) {
      const aItem = Number(aArr[i] ?? 0);
      const bItem = Number(bArr[i] ?? 0);

      if (aItem > bItem) {
        return 1;
      } else if (aItem < bItem) {
        return -1;
      } else {
        continue;
      }
    }

    return 0;
  });

  return versionsArr;
}

// Usage example
const sortedVersions = sortVersions([
  "0.1.1",
  "2.3.3",
  "0.302.1",
  "4.2",
  "4.3.5",
  "4.3.4.5",
]);
console.log(sortedVersions); // => [ '0.1.1', '0.302.1', '2.3.3', '4.2', '4.3.4.5', '4.3.5' ]
```

---

## Reference

- [Alphanumericals - Wikipedia.org](https://en.wikipedia.org/wiki/Alphanumericals)
- [Naming convention (programming) - Wikipedia.org](<https://en.wikipedia.org/wiki/Naming_convention_(programming)>)
- [79. convert snake_case to camelCase - BFE.dev](https://bigfrontend.dev/problem/convert-snake_case-to-camelCase)
- [Software versioning - Wikipedia.org](https://en.wikipedia.org/wiki/Software_versioning)
- [157. semver compare - BFE.dev](https://bigfrontend.dev/problem/semver-compare)
- [165. Compare Version Numbers - LeetCode](https://leetcode.com/problems/compare-version-numbers/description/)
- [97. compress a string - BFE.dev](https://bigfrontend.dev/problem/compress-a-string)
- [173. uncompress string - BFE.dev](https://bigfrontend.dev/problem/uncompress-string)
- [145. most frequently occurring character - BFE.dev](https://bigfrontend.dev/problem/most-frequently-occurring-character)
- [94. emoji - BFE.dev](https://bigfrontend.dev/quiz/emoji)
- [394. Decode String - LeetCode](https://leetcode.com/problems/decode-string?envType=study-plan-v2&envId=top-100-liked)
