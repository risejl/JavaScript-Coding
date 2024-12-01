function asyncGenerator(generatorFunc) {
  return function (...args) {
    const generator = generatorFunc(...args);

    return new Promise((resolve, reject) => {
      function handle(iteratorResult) {
        if (iteratorResult.done) {
          resolve(iteratorResult.value);
          return;
        }

        Promise.resolve(iteratorResult.value).then(
          (value) => handle(generator.next(value)),
          (err) => handle(generator.throw(err))
        );
      }

      try {
        handle(generator.next());
      } catch (err) {
        reject(err);
      }
    });
  };
}

// Usage example
function* fetchData() {
  const data1 = yield fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  ).then((res) => res.json());
  console.log(data1);

  const data2 = yield fetch(
    "https://jsonplaceholder.typicode.com/posts/2"
  ).then((res) => res.json());
  console.log(data2);
}

// Create an async version of the generator function
const asyncFetchData = asyncGenerator(fetchData);

// Call the async function
asyncFetchData()
  .then(() => console.log("All data fetched!"))
  .catch((err) => console.error("Error:", err));

/*
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
{
  userId: 1,
  id: 2,
  title: 'qui est esse',
  body: 'est rerum tempore vitae\n' +
    'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
    'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
    'qui aperiam non debitis possimus qui neque nisi nulla'
}
All data fetched!
*/
