/**
 * @param {*} reason
 * @returns Promise
 */

function promiseReject(reason) {
  return new Promise((_, reject) => {
    reject(reason);
  });
}

/*
try {
  promiseReject('Mayday!');
} catch (err) {
  console.log(err); // Mayday!
}
*/