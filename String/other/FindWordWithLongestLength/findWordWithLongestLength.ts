const longestWord = function (str: string): string[] {
  const wordArr = str.split(' ');
  const result: string[] = [];
  let max = 0;

  for (const word of wordArr) {
    if (word.length > max) {
      max = word.length;
    }
  }

  for (const word of wordArr) {
    if (word.length === max) {
      result.push(word);
    }
  }

  return result;
}

// example
// console.log(longestWord('The longest word is fasdfafaf')); // ['fasdfafaf']