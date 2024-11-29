const URL = "https://jsonplaceholder.typicode.com/posts";

function fetchWithRetry(url, maxRetries) {
  return new Promise((resolve, reject) => {
    let retries = 0;

    function fetchData(url) {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          retries += 1;
          if (retries >= maxRetries) {
            reject(
              new Error(`Max retries reached. Last error: ${err.message}`)
            );
          } else {
            console.log(
              `Request failed, retrying... (${retries}/${maxRetries})`
            );
            fetchData(url);
          }
        });
    }

    fetchData(url);
  });
}

// Usage example
fetchWithRetry(URL, 5)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
