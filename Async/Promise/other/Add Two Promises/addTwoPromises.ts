type P = Promise<number>;

async function addTwoPromises(
  promise1: P,
  promise2: P
): P {
  return new Promise(async (resolve) => {
    const res1 = await promise1;
    const res2 = await promise2;
    resolve(res1 + res2);
  });
}

// example
// addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4