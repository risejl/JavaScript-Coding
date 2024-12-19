const addComma = function (num: number): string {
	let [integer, float] = String(num).split('.');
	const fraction = float ? `.${float}` : '';

	return Number(integer).toLocaleString() + fraction;
}

// example
/*
console.log(addComma(1)); // '1'
console.log(addComma(1000)); // '1,000'
console.log(addComma(-12345678)); // '-12,345,678'
console.log(addComma(12345678.12345)); // '12,345,678.12345'
*/