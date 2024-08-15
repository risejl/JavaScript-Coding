function throttlePromises(funcs: Function[], max: number): Promise<any> {
  const results: any[] = [];
  async function doWork(iterator) {
    for (let [index, element] of iterator) {
      const result = await element();
      results[index] = result;
    }
  }

  const iterator = Array.from(funcs).entries();
  const workers = Array(max).fill(iterator).map(doWork);

  return Promise.all(workers).then(() => results);
}

// example
/*
throttlePromises(callApis, 5).then((data) => {
  // the data is the same as `Promise.all` 
}).catch((err) => {
  // any error occurs in the callApis would be relayed here
})
*/