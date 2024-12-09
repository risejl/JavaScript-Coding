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
