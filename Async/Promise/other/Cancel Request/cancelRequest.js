const URL = "https://jsonplaceholder.typicode.com/posts/1";
const TIMEOUT = 5000;

function fetchDataWithTimeout(url, timeout) {
  const controller = new AbortController();
  const { signal } = controller;

  const timerId = setTimeout(() => {
    controller.abort();
  }, timeout);

  return fetch(url, { signal })
    .then((response) => {
      clearTimeout(timerId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        throw new Error("Fetch operation timed out");
      } else {
        throw err;
      }
    });
}

// Usage example
fetchDataWithTimeout(URL, TIMEOUT)
  .then((data) => {
    console.log("Fetched data:", data);
    console.log("Title:", data.title);
    console.log("Body:", data.body);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

/*
Fetched data: {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
Body: quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto
*/

// Or

// Error: Request timed out || Error: [Specific error message]
