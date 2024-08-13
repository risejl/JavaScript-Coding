function Parent(name) {
  this.name = name;
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

const child = new Child('Bob', 12);

// example
// console.log(child.name); // 'Bob'