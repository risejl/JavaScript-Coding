/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */

// Recursive approach
function fetchWithAutoRetry(fetcher, maximumRetryCount = 5) {
  return fetcher()
    .catch((err) => {
      if (maximumRetryCount === 0) {
        throw err;
      } else {
        return fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
      }
    });
}

// Iterative approach
function fetchWithAutoRetry(fetcher, maximumRetryCount = 5) {
  return new Promise((resolve, reject) => {
    function attempt(count) {
      fetcher()
        .then(resolve)
        .catch((err) => {
          if (count === 0) {
            reject(err);
          } else {
            attempt(count - 1);
          }
        });
    }

    attempt(maximumRetryCount);
  });
}

// Usage example
function simulateAPICall() {
  return new Promise((resolve, reject) => {
    // Simulate a 50% chance of failure
    if (Math.random() < 0.5) {
      reject(new Error('API call failed'));
    } else {
      resolve('API call succeeded');
    }
  });
}

fetchWithAutoRetry(simulateAPICall, 3)
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('All retries failed:', error.message);
  });

// Example output (may vary due to randomness):
// Success: API call succeeded

// Or if all retries fail:
// All retries failed: API call failed