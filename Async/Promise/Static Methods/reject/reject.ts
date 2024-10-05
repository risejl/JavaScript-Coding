function promiseReject<T = never>(reason: any): Promise<T> {
  return new Promise((_, reject) => {
    reject(reason);
  });
}

// example
/*
try {
  promiseReject('Mayday!');
} catch (err) {
  console.log(err); // Mayday!
}
*/