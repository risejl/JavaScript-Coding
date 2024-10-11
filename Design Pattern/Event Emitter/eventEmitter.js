class EventEmitter {
  constructor() {
    this._events = Object.create(null);
    this._key = 0;
  }

  on(eventName, listener) {
    if (!Object.hasOwn(this._events, eventName)) {
      this._events[eventName] = {};
    }

    const listenerId = this._key;
    this._key += 1;

    this._events[eventName][listenerId] = listener;

    return {
      off: () => {
        delete this._events[eventName][listenerId];
      }
    }
  }

  emit(eventName, ...args) {
    if (
      !Object.hasOwn(this._events, eventName) ||
      !Object.keys(this._events[eventName]).length
    ) {
      return false;
    }

    const listeners = { ...this._events[eventName] };
    Object.values(listeners).map((listener) => {
      listener.call(null, ...args);
    });

    return true;
  }

  once(eventName, listener) {
    const subscription = this.on(eventName, (...args) => {
      subscription.off();
      listener(...args);
    });

    return subscription;
  }
}

// Usage example
const emitter = new EventEmitter();

function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}

const sub = emitter.on('foo', addTwoNumbers);
emitter.emit('foo', 1, 2);
// => "The sum is 3"

emitter.on('foo', (a, b) => {
  console.log(`The product is ${a * b}`);
});
emitter.emit('foo', 4, 5);
// > "The sum is 9"
// > "The product is 20"

sub.off();
emitter.emit('foo', -3, 9);
// > "The product is -27"
// (Only the multiply callback is triggered, the first one was unsubscribed.)

emitter.once('bar', (x) => {
  console.log(`Bar was called with ${x}`);
});

emitter.emit('bar', 1); // Logs: "Bar was called with 1"
emitter.emit('bar', 2); // Does nothing, the listener was already removed