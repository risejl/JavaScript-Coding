class NodeStore {
  /**
   * @param {Node} node
   * @param {any} value
   */

  constructor() {
    this._store = Object.create(null);
  }

  set(node, value) {
    this._store[node] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this._store[node] ?? undefined;
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return Object.hasOwn(this._store, node);
  }
}

// Usage example
const map = new NodeStore();
map.set("test", 1);
console.log(map.has("test", 1)); // => true
console.log(map.get("test")); // => 1
