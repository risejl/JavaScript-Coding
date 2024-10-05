function createCustomIterable(data) {
  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < data.length) {
            return {
              value: data[index++],
              done: false
            }        
          } else {
            return {
              done: true,
            }
          }
        }
      }
    }
  }
}

// Usage example:
const customIterable = createCustomIterable([1, 2, 3, 4]);

// Using for...of loop
for (const item of customIterable) {
    console.log(item);
}

// Using spread operator
const arrayFromIterable = [...customIterable];
console.log(arrayFromIterable);

// Using Array.from()
const anotherArray = Array.from(customIterable);
console.log(anotherArray);