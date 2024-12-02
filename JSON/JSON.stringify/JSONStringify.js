/**
 * @param {*} value
 * @return {string}
 */

function jsonStringify(value) {
  if (Array.isArray(value)) {
    const arrayValues = value.map((item) => jsonStringify(item));
    return `[${arrayValues.join(",")}]`;
  }

  if (typeof value === "object" && value !== null) {
    const objectEntries = Object.entries(value).map(
      ([key, value]) => `"${key}":${jsonStringify(value)}`
    );

    return `{${objectEntries.join(",")}}`;
  }

  if (typeof value === "string") {
    return `"${value}"`;
  }

  return String(value);
}

// Usage example

const input = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "painting"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
};

console.log(jsonStringify(input)); // => "{"name":"John Doe","age":30,"hobbies":["reading","painting"],"address":{"street":"123 Main St","city":"New York","state":"NY","zipCode":"10001"}}"
