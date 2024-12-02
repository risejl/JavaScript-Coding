class PriorityQueue {
  constructor(compare) {
    this.compare = compare;
    this.queue = [];
  }

  add(element) {
    this.queue.push(element);
    this.queue.sort(this.compare);
  }

  poll() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }
}
