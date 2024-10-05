export default class EventEmitter {
  constructor() {
    this._events = Object.create(null);
    this._key = 0;
  }

  on(eventName, listener) {
    if (!Object.hasOwn(this._events, eventName)) {
      this._events[eventName] = {};
    }

    const listenerId = this._key;

    this._events[eventName][listenerId] = listener;
    this._key++;

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

    Object.values(listeners).forEach((listener) => {
      listener.call(null, ...args);
    });

    return true;
  }
}