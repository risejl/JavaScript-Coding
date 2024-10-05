/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */

function fetchWithAutoRetry(fetcher, maximumRetryCount = 5) {
  return fetcher().catch((err) => {
    if (!maximumRetryCount) {
      throw err;
    } else {
      return fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
    }
  })
}