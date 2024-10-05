const add = function (numStr1: string, numStr2: string): string {
	const num1 = numStr1.split('').map(char => Number(char));
	const num2 = numStr2.split('').map(char => Number(char));
	let carry = 0;
	let result: number[] = [];

	while (num1.length || num2.length || carry) {
		const sum = (num1.pop() ?? 0) + (num2.pop() ?? 0) + carry;
		carry = sum > 9 ? 1 : 0;
		result.push(sum % 10);
	}

	return result.reverse().join('');
}

// example
// console.log(add('999999999999999999', '1')); // '1000000000000000000'