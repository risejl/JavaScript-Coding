You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Design%20Pattern).

---

## Design Pattern related challenges

---

### Event Emitter

Use an object to store the event and corresponding listener functions.

```js
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
      },
    };
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

const sub = emitter.on("foo", addTwoNumbers);
emitter.emit("foo", 1, 2);
// => "The sum is 3"

emitter.on("foo", (a, b) => {
  console.log(`The product is ${a * b}`);
});
emitter.emit("foo", 4, 5);
// > "The sum is 9"
// > "The product is 20"

sub.off();
emitter.emit("foo", -3, 9);
// > "The product is -27"
// (Only the multiply callback is triggered, the first one was unsubscribed.)

emitter.once("bar", (x) => {
  console.log(`Bar was called with ${x}`);
});

emitter.emit("bar", 1); // Logs: "Bar was called with 1"
emitter.emit("bar", 2); // Does nothing, the listener was already removed
```

---

### Singleton

```js
const globalMap = new Map();

export default {
  getInstance() {
    return globalMap;
  },
};
```

---

### Factory

```js
/**
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 * @return {object}
 */

function createPerson(firstName, lastName, age) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    greet: function () {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
  };
}

// Usage example
const person1 = createPerson("John", "Doe", 30);
person1.greet(); // => 'Hello, my name is John Doe'

const person2 = createPerson("Jane", "Smith", 25);
person2.greet(); // => 'Hello, my name is Jane Smith'
```

---

## Reference

- [GreatFrontEnd](https://www.greatfrontend.com/)
- [Event-driven programming - Wikipedia.org](https://en.wikipedia.org/wiki/Event-driven_programming)
- [16. create an Event Emitter - BFE.dev](https://bigfrontend.dev/problem/create-an-Event-Emitter)
- [2694. Event Emitter - LeetCode](https://leetcode.com/problems/event-emitter/description/)
- [Singleton pattern - Wikipedia.org](https://en.wikipedia.org/wiki/Singleton)
- [Singleton pattern - patterns.dev](https://www.patterns.dev/vanilla/singleton-pattern)
- [Design Pattern - Wikipedia.org](https://en.wikipedia.org/wiki/Software_design_pattern)
- [Factory method pattern - Wikipedia.org](https://en.wikipedia.org/wiki/Factory_method_pattern)
