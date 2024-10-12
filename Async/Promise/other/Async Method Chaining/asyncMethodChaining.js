class LazyMan {
  constructor(name) {
    this.name = name;
    console.log(`My name is ${name}`);
    this.taskQueue = [];
    
    setTimeout(() => {
      return this.next();
    });
  }

  sleep(delay) {
    this.taskQueue.push(() => {
      console.log(`I am sleeping...`);
      setTimeout(() => {
        console.log(`After ${delay} seconds`);
        this.next();
      }, delay);
    });

    return this;
  }

  eat(food) {
    this.taskQueue.push(() => {
      console.log(`I am eating ${food}`);
      this.next();
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

const lazyMan = new LazyMan('jack');
lazyMan.eat('apple').sleep(5000).eat('hamburger').sleep(3000).eat('pear');

/*
I am eating apple
I am sleeping...
after 5000 ms
I am eating hamburger
I am sleeping...
after 3000 ms
I am eating pear
My name is jack
*/