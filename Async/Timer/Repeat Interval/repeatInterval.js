const URL =
  "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      return response.blob();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}

function repeat(callbackFn, delay, count) {
  let currentCount = 0;

  const timerId = setInterval(() => {
    if (currentCount < count) {
      callbackFn();
      currentCount += 1;
    } else {
      clearInterval(timerId);
    }
  }, delay);

  return {
    clear: () => clearInterval(timerId),
  };
}

// Usage example
const cancel = repeat(() => fetchData(URL), 2000, 5);
setTimeout(() => {
  cancel.clear();
}, 11000);
