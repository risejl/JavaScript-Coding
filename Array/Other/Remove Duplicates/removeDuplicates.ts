const removeDuplicate = (arr) => {
	arr.sort();

	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}

	arr.splice(i + 1);
}