function fetchWithAutoRetry(fetcher: Function, maximumRetryCount: number): Promise<any> {
  return fetcher().catch((error) => {
    if (maximumRetryCount === 0) {
      throw error;
    } else {
      return fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
    }
  });
}