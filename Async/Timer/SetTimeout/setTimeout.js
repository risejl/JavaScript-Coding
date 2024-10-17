function setTimeout(callbackFn, delay) {
  let elapsedTime = 0;
  const interval = 100;

  const intervalId = setInterval(() => {
    elapsedTime += interval;

    if (elapsedTime >= delay) {
      clearInterval(intervalId);
      callbackFn();
    }
  }, interval);
}

// Usage example
mySetTimeout(() => {
  console.log('This message is displayed after 2 seconds.');
}, 2000);