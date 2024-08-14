function debounce(func: Function, wait: number = 0): Function {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (...args: any[]) {
    const context = this;
    clearTimeout(timeoutId ?? undefined);
    
    timeoutId = setTimeout(function () {
      timeoutId = null;
      func.call(context, ...args);
    }, wait);
  }
}

// example
/*
const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // 'Hello' Logged at t=100ms
*/