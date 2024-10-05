const longestLength = function (str: string): number {
  return Math.max(
    ...str
      .split(' ')
      .map(x => x.length)
  );
}

// example
// console.log(longestLength('The longest word is fasdfafaf')); // 9