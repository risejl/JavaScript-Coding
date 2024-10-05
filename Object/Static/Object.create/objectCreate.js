/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  function MyConstructor() {};

  MyConstructor.prototype = proto.prototype ?? proto;

  return new MyConstructor();
}

// example
/*
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
const me = myObjectCreate(person);
me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten
me.printIntroduction(); // "My name is Matthew. Am I human? true"
*/