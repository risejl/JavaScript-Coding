function addSpacesEveryFourDigits(num) {
  const numStr = String(num);
	let result = '';
  
  for (let i = 0; i < numStr.length; i += 1) {
    result += numStr[i];
    
    if ((i + 1) % 4 === 0 && (i + 1) !== numStr.length) {
      result += ' ';
    }
  }
  
  return result.trim();
}

// Example usage:
const input = "1234567890";
const output = addSpacesEveryFourDigits(input);
console.log(output); // Output: "1234 5678 90"