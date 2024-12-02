let executeCount = 0;

const targetFn = async (nums) => {
  executeCount += 1;
  return nums.map((num) => 2 * num + 1);
};

const batcher = (fn) => {
  let nums = [];
  const promise = new Promise((resolve) =>
    setTimeout((_) => resolve(fn(nums)), 0)
  );

  return (arr) => {
    let start = nums.length;
    nums = nums.concat(arr);
    let end = nums.length;
    return promise.then((result) => result.slice(start, end));
  };
};

const batchedFn = batcher(targetFn);

// Usage example
const main = async () => {
  const [result1, result2, result3] = await Promise.all([
    batchedFn([1, 2, 3]),
    batchedFn([4, 5]),
    batchedFn([6, 7]),
  ]);

  console.log(result1, result2, result3);
  console.log(executeCount); // => 1
};

main();
