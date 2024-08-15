function limitRequest(urls: string[] = [], limit: number = 3): Promise<void> {
  return new Promise<void>((resolve) => {
    const len = urls.length;
    let count = 0;

    while (limit > 0) {
      start();
      limit -= 1;
    }

    function start() {
      const url = urls.shift();
      if (url) {
        fetch(url, {
          method: 'POST',
        }).then(_ => {
        }).catch(_ => {
        }).finally(() => {
          if (count == len - 1) {
            resolve()
          } else {
            count++
            start()
          }
        })
      }
    }
  })
}

// limitRequest(['http://xxa', 'http://xxb', 'http://xxc', 'http://xxd', 'http://xxe']);