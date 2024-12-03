function rand5() {
  return Math.floor(Math.random() * 5);
}

/**
 * @return {number}
 */

function rand7() {
  const num = 5 * rand5() + rand5();
  if (num < 21) {
    return num % 7;
  }
}

// Usage example
console.log(rand7());
