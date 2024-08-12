function isAlphaNumeric(char: any): Boolean {
  return /[A-Za-z0-9]/.test(char);
}

// example
/*
console.log(isAlphaNumeric('a')); // true
console.log(isAlphaNumeric(0)); // true
console.log(isAlphaNumeric('!')); // false
*/