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
