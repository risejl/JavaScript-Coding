/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 * @param {number} size
 * @return {Promise}
 */

async function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  const results = [];

  for (let i = 0; i < iterable.length; i += size) {
    const chunk = iterable.slice(i, i + size);
    const chunkResults = await Promise.all(chunk.map(callbackFn));

    results.push(chunkResults);
  }

  return results;
}