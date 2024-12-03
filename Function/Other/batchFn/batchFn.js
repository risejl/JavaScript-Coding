let executeCount = 0;

const targetFn = async (nums) => {
  executeCount += 1;
  return nums.map((num) => 2 * num + 1);
};

const batcher = (fn, delay = 0) => {
  let nums = [];
  let timer = null;

  return (arr) => {
    nums = nums.concat(arr);

    if (!timer) {
      timer = setTimeout(async () => {
        const result = await fn(nums);
        nums = [];
        timer = null;
        return result;
      }, delay);
    }

    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (timer == null) {
          clearInterval(interval);
          resolve(targetFn(nums.slice(-arr.length)));
        }
      }, 10);
    });
  };
};

const batchedFn = batcher(targetFn, 0);

// Usage example
const main = async () => {
  const [result1, result2, result3] = await Promise.all([
    batchedFn([1, 2, 3]),
    batchedFn([4, 5]),
    batchedFn([6, 7]),
  ]);

  console.log(result1, result2, result3); // => [ 3, 5, 7 ] [ 9, 11 ] [ 13, 15 ]
  console.log(executeCount); // => 1
};

main();
