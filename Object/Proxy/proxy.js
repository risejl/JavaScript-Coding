/*
* Proxy for property access interception
*/

const target = {
  message: 'Hello World',
};

const handler = {
  get: function (target, property) {
    if (Object.hasOwn(target, property)) {
      return target[property];
    }

    return `Property ${property} does not exist.`;
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.message);
console.log(proxy.nonExistentProperty);
