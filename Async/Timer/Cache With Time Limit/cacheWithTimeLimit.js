class TimeLimitedCache {
  constructor() {
    this._cache = new Map();
  }

  set(key, value, duration) {
    const found = this._cache.has(key);

    if (found) {
      clearTimeout(this._cache.get(key).ref);
    }

    this._cache.set(key, {
      value,
      ref: setTimeout(() => {
        this._cache.delete(key);
      }, duration),
    });

    return found;
  }

  get(key) {
    if (this._cache.has(key)) {
      return this._cache.get(key);
    } else {
      return -1;
    }
  }

  count() {
    return this._cache.size;
  }
}

// Usage example
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, "first", 1000)); // => false
console.log(timeLimitedCache.get(1).value); // => 'first'
console.log(timeLimitedCache.count()); // => 1
setTimeout(() => {
  console.log(timeLimitedCache.count()); // => 0
  console.log(timeLimitedCache.get(1)); // => -1
}, 2000);
