const URL = 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU';

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

function repeat(task, interval) {
  const timerId = setInterval(() => {
    task();
  }, interval);

  return {
    clear: () => clearInterval(timerId),
  }
}

// Usage example
const cancel = repeat(() => fetchData(URL), 2000);
setTimeout(() => {
  cancel.clear();
}, 5000);