class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(element) {
    for (let i = 0; i < this.stack1.size(); i += 1) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(element);

    for (let i = 0; i < this.stack2.size(); i += 1) {
      this.stack1.push(this.stack2.pop());
    }
  }

  peek() {
    return this.stack1.peek();
  }

  size() {
    return this.stack1.size();
  }

  dequeue() {
    return this.stack1.pop();
  }
}

// Usage example
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // => 1
queue.size(); // => 2
queue.peek(); // => 2
