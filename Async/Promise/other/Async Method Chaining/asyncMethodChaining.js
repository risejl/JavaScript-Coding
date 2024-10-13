class LazyMan {
  constructor(name) {
    this.name = name;
    console.log(`My name is ${name}`);
    this.taskQueue = [];

    setTimeout(() => {
      return this.next();
    });
  }
  
  eat(food) {
    this.taskQueue.push(() => {
      console.log(`I am eating ${food}`);
      this.next();
    });

    return this;
  }

  sleep(delay) {
    this.taskQueue.push(() => {
      console.log('I am sleeping...');
      setTimeout(() => {
        console.log(`After ${delay} seconds`);
        this.next();
      }, delay);
    });

    return this;
  }

  next() {
    const fn = this.taskQueue.shift();
    if (typeof fn === 'function') {
      fn();
    }
  }
}

// Usage example
const lazyMan = new LazyMan('jack');
lazyMan.eat('apple').sleep(5000).eat('hamburger').sleep(3000).eat('pear');

/*
My name is jack
I am eating apple
I am sleeping...
After 5000 seconds
I am eating hamburger
I am sleeping...
After 3000 seconds
I am eating pear
*/