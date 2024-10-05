class TimeLimitedCache {
  private cache: Map<number, { value: number, ref: ReturnType<typeof setTimeout> }>;

  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const found = this.cache.has(key);
    if (found) {
      clearTimeout(this.cache.get(key)!.ref);
    }
    this.cache.set(key, {
      value,
      ref: setTimeout(() => {
        this.cache.delete(key);
      }, duration),
    });

    return found;
  }

  get(key: number): number {
    return this.cache.has(key) ? this.cache.get(key)!.value : -1;
  }

  count(): number {
    return this.cache.size;
  }
}

// example
/*
const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
*/