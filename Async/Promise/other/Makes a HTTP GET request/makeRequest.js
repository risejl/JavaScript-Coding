const URL = 'https://randomuser.me/api/';

/**
 * @param {string} url
 * @return {promise}
 */

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

fetchData(URL)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`Request error: ${err}`);
  });
/*
{
  results: [
    {
      gender: 'male',
      name: [Object],
      location: [Object],
      email: 'joanikije.lazic@example.com',
      login: [Object],
      dob: [Object],
      registered: [Object],
      phone: '034-5670-262',
      cell: '067-5723-987',
      id: [Object],
      picture: [Object],
      nat: 'RS'
    }
  ],
  info: { seed: '38e4419ddfa3cd4d', results: 1, page: 1, version: '1.4' }
}
*/