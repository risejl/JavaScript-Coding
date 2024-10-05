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
      }, duration)
    });

    return found;
  }

  get(key) {
    if (this._cache.has(key)) {
      return this._cache.get(key).value;
    } else {
      return -1;
    }
  }

  count() {
    return this._cache.size;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */